import express from 'express';
import { createWriteStream } from 'node:fs';
import { readdir, rename, rm } from 'node:fs/promises';

const app = express();
app.use(express.json())

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    });
    next()
})

app.get('/', async (req, res) => {
    const ItemsList = await readdir(`./storage`)
    res.send(ItemsList)
})

// Read Feature
app.get('/:filename', async (req, res) => {
    if (req.url.startsWith('/appspecific')) return;
    else {
        const { filename } = req.params;
        if (req.query.action === 'download') {
            res.set({ 'Content-Disposition': 'attachment' })
        }
        res.sendFile(`${import.meta.dirname}/storage/${filename}`);
    }
})

// Create Feature
app.post('/', (req, res) => {
    const writable = createWriteStream(`./storage/${req.headers.filename}`);
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
app.patch('/:filename', async (req, res) => {
    const { oldFileName, filename } = req.body;
    try {
        await rename(`./storage/${oldFileName}`, `./storage/${filename}`);
        res.status(200).json({ message: 'File renamed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Delete feature
app.delete('/:filename', async (req, res) => {
    const { filename } = req.params;
    try {
        await rm(`storage/${filename}`);
        res.status(200).json({ message: 'File deleted successfully' })
    } catch (error) {
        res.status(404).json({ message: 'File dose not exists' })
    }
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})