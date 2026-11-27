import express from 'express';
import { rm, writeFile } from 'node:fs/promises';
import directoriesData from '../../data/directoriesDB.json' with {type: 'json'}
import filesData from '../../data/filesDB.json' with {type: 'json'};
import { DIRECTORIES_DB_PATH, FILES_DB_PATH, STORAGE_DIR_PATH } from '../config/path.js';

const DirectoryRouter = express.Router()

// create directory 
DirectoryRouter.post('/:dirName', async (req, res) => {
    const { dirName } = req.params;
    const parentDirID = req.headers.parentdirid || directoriesData[0].id;
    const id = crypto.randomUUID();
    const neWDir = {
        id,
        dirName,
        parentDirID,
        files: [],
        directories: []
    }
    const parentDir = directoriesData.find((dir) => dir.id === parentDirID);
    parentDir.directories.push(id);
    directoriesData.push(neWDir)
    try {
        await writeFile(`${DIRECTORIES_DB_PATH}`, JSON.stringify(directoriesData))
        res.status(200).json({ message: 'Folder created successfully.' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// read directory 
DirectoryRouter.get('{/:id}', async (req, res) => {
    const { id } = req.params;
    let dirData = {};
    if (!id) {
        dirData = { ...directoriesData[0] };
    } else {
        dirData = { ...directoriesData.find((dir) => dir.id === id) };
    }
    if (Object.keys(dirData).length === 0) {
        res.status(404).json({ message: 'folder not found.' })
    } else {
        dirData.files = dirData.files.map((fileId) => {
            return filesData.find(file => file.id === fileId)
        })
        dirData.directories = dirData.directories.map((dirId) => {
            const dir = directoriesData.find(dir => dir.id === dirId);
            if (!dir) {
                return;
            } else {
                const { id, dirName } = dir;
                return { id, dirName }
            }
        })
        res.status(200).json(dirData);
    }
})

// update directory 
DirectoryRouter.patch('/:dirID', async (req, res) => {
    const { dirID } = req.params;
    const { newName } = req.query;
    const dirData = directoriesData.find(dir => dir.id === dirID);
    dirData.dirName = newName;
    try {
        await writeFile(`${DIRECTORIES_DB_PATH}`, JSON.stringify(directoriesData))
        res.status(200).json({ message: 'Folder renamed successfully.' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// delete directory 
DirectoryRouter.delete('/:dirID', async (req, res) => {
    const { dirID } = req.params;
    const dirData = directoriesData.find(dir => dir.id === dirID);

    if (!dirData) {
        return res.status(404).json('Directory not found');
    }

    await removeChildItems(dirData);

    // console.log(directoriesData)
    // console.log(filesData)

    try {
        await writeFile(`${DIRECTORIES_DB_PATH}`, JSON.stringify(directoriesData))
        await writeFile(`${FILES_DB_PATH}`, JSON.stringify(filesData))
        res.status(200).json({ message: 'Folder deleted successfully.' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// RECURSIVE DELETE FUNCTIONALITY
async function removeChildItems(dirData) {
    for (const chidDirId of [...dirData.directories]) {
        const childDirs = directoriesData.find(dir => dir.id === chidDirId);
        await removeChildItems(childDirs);
    }

    // RECURSIVE FILE DELETION 
    for (const chidFileId of [...dirData.files]) {
        const childFileIndex = filesData.findIndex(file => file.id === chidFileId)
        const childFile = filesData[childFileIndex];

        // REMOVING FILE FROM PHYSICAL FILE STORAGE
        await rm(`${STORAGE_DIR_PATH}/${childFile.id}${childFile.extension_name}`);
        filesData.splice(childFileIndex, 1);
    }

    const parentDirID = dirData.parentDirID;
    const parentDir = directoriesData.find(dir => dir.id === parentDirID);
    const currentDirIndex = directoriesData.findIndex(dir => dir.id === dirData.id);
    
    // REMOVING CURRENT DIR ENTRY FROM ITS PARENT DIR
    if (parentDir) {
        parentDir.directories = parentDir.directories.filter(dirID => dirID !== dirData.id)
    }
    
    // REMOVING CURRENT DIR ENTRY FROM DIRS DB
    if (currentDirIndex !== -1) {
        directoriesData.splice(currentDirIndex, 1);
    }
}

export default DirectoryRouter;