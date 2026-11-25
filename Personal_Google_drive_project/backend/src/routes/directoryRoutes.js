import express from 'express';
import { mkdir } from 'node:fs/promises';
import directoriesData from '../../data/directoriesDB.json' with {type: 'json'}
import filesData from '../../data/filesDB.json' with {type: 'json'};

const DirectoryRouter = express.Router()

DirectoryRouter.get('{/:id}', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        // res.status(200).json(directoriesData[0])
        const dirData = { ...directoriesData[0] };
        dirData.files = dirData.files.map((fileId) => {
            return filesData.find(file => file.id === fileId)
        })
        res.status(200).json(dirData)
        // console.log(directoriesData)
    } else {
        const dirData = {...directoriesData.find((dir) => dir.id === id)};
        if (Object.keys(dirData).length === 0) {
            res.status(404).json({ message: 'folder not found.' })
        } else {
            dirData.files = dirData.files.map((fileId) => {
                return filesData.find(file => file.id === fileId)
            })
            res.status(200).json(dirData);
            // console.log(directoriesData)
        }
    }
})

DirectoryRouter.post('/*dirname', async (req, res) => {
    await mkdir(`../data/storage/${req.params.dirname.join('/')}`)
    res.status(200).json({ message: 'folder created' })
})

export default DirectoryRouter;