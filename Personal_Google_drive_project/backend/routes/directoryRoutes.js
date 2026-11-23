import express from 'express';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path'

const DirectoryRouter = express.Router()

DirectoryRouter.get('{/*dirname}', async (req, res) => {
    const ItemsList = await readdir(`${import.meta.dirname.replace('/routes', '')}/storage/${req.params.dirname ? req.params.dirname.join('/') : ''}`, { withFileTypes: true });
    const responseArray = []
    ItemsList.forEach((item) => {
        const newEntry = { ...item, isDirectory: false, isFile: false }
        if (item.isDirectory()) newEntry.isDirectory = true;
        else if (item.isFile()) newEntry.isFile = true;
        responseArray.push(newEntry)
    })
    res.send(responseArray)
})

DirectoryRouter.post('/*dirname', async (req, res) => {
    await mkdir(`./storage/${req.params.dirname.join('/')}`)
    res.status(200).json({message: 'folder created'})
})

export default DirectoryRouter;