import express from 'express';
import { createWriteStream } from 'node:fs';
import { rename, rm } from 'node:fs/promises';

const filesRouter = express.Router();

// Read Feature
filesRouter.get('/*filepath', async (req, res) => {
    if (req.url.startsWith('/appspecific')) return;
    else {
        const { filepath } = req.params;
        if (req.query.action === 'download') {
            res.set({ 'Content-Disposition': 'attachment' })
        }
        res.sendFile(`${import.meta.dirname.replace('/routes', '')}/storage/${filepath.join("/")}`);
    }
})

// Create Feature
filesRouter.post('/uploads', (req, res) => {
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
filesRouter.patch('/:filename', async (req, res) => {
    const { oldFileName, filename: newFilename, dirpath: filePath } = req.body;
    try {
        await rename(`./storage/${filePath ? filePath + '/' : ''}${oldFileName}`, `./storage/${filePath ? filePath + '/' : ''}${newFilename}`);
        res.status(200).json({ message: 'File renamed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

// Delete feature
filesRouter.delete('/*filepath', async (req, res) => {
    const { filepath } = req.params;
    try {
        await rm(`storage/${filepath.join('/')}`, { recursive: true });
        res.status(200).json({ message: 'File deleted successfully' })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export default filesRouter