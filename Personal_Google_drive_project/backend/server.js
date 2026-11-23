import express from 'express';
import { createWriteStream } from 'node:fs';
import { readdir, rename, rm } from 'node:fs/promises';
import cors from 'cors'
import path from 'node:path';

const app = express();
app.use(express.json())
app.use(cors())

app.get('/directory{/*dirname}', async (req, res) => {
    const ItemsList = await readdir(`storage/${req.params.dirname ? req.params.dirname.join('/') : ''}`, { withFileTypes: true });
    const responseArray = []
    ItemsList.forEach((item) => {
        const newEntry = { ...item, isDirectory: false, isFile: false }
        if (item.isDirectory()) newEntry.isDirectory = true;
        else if (item.isFile()) newEntry.isFile = true;
        responseArray.push(newEntry)
    })
    res.send(responseArray)
})

// Read Feature
app.get('/files/*filepath', async (req, res) => {
    if (req.url.startsWith('/appspecific')) return;
    else {
        const { filepath } = req.params;
        if (req.query.action === 'download') {
            res.set({ 'Content-Disposition': 'attachment' })
        }
        res.sendFile(`${import.meta.dirname}/storage/${filepath.join("/")}`);
    }
})

// Create Feature
app.post('/files/uploads', (req, res) => {
    const writable = createWriteStream(`./storage/${req.headers.filepath ? req.headers.filepath + '/' : ''}${req.headers.filename}`);
    writable.on('finish', () => {
        res.status(200).json({ message: 'File uploaded successfully!' });
    });

    writable.on('error', (err) => {
        console.log('Writable error:', err);
    });

    req.pipe(writable);

    req.on('error', (err) => {
        console.log('Connection Lost with the client')
    })
})

// Update Feature
app.patch('/files/:filename', async (req, res) => {
    const { oldFileName, filename: newFilename, dirpath: filePath } = req.body;
    try {
        await rename(`./storage/${filePath ? filePath + '/' : ''}${oldFileName}`, `./storage/${filePath ? filePath + '/' : ''}${newFilename}`);
        res.status(200).json({ message: 'File renamed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Delete feature
app.delete('/files/*filepath', async (req, res) => {
    const { filepath } = req.params;
    try {
        await rm(`storage/${filepath.join('/')}`, { recursive: true });
        res.status(200).json({ message: 'File deleted successfully' })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})