import express from 'express';
import { createWriteStream } from 'node:fs';
import { rename } from 'node:fs/promises';
import { rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import filesData from '../../data/filesDB.json' with {type: 'json'};
import directoriesData from '../../data/directoriesDB.json' with {type: 'json'}
import { STORAGE_DIR_PATH, FILES_DB_PATH, DIRECTORIES_DB_PATH } from '../config/path.js'

const filesRouter = express.Router();

// Read Feature
filesRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const filedata = filesData.find((file) => file.id === id);

    if(!filedata){
        res.status(404).json({ error: 'File or resource not found' })
    }

    if (req.query.action === 'download') {
        res.attachment(filedata.filename)
    }
    try {
        const filePath = `${STORAGE_DIR_PATH}/${filedata.id}${filedata.extension_name}`
        res.sendFile(filePath, (err) => {
            if (err && !res.headersSent) {
                res.status(err.statusCode || 500).json({error: err.message})
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Create Feature
filesRouter.post('/:filename', async (req, res) => {
    // adding the file in storage dir
    const { filename } = req.params;
    const parentDirId = req.headers.parentdirid || directoriesData[0].id;
    const fileExtension = path.extname(filename)
    const id = crypto.randomUUID();
    const newFilename = `${id}${fileExtension}`
    // console.log(newFilename);
    const writable = createWriteStream(`${STORAGE_DIR_PATH}/${newFilename}`);

    // making the file entry in filesDB.json
    filesData.push({ id, filename, extension_name: fileExtension, parentDirId })

    // making the file entry in directoriesDB.json
    directoriesData.find(dir => dir.id === parentDirId).files.push(id);

    writable.on('error', (err) => {
        console.log('Writable error:', err.message);
    });

    req.pipe(writable);

    writable.on('finish', async () => {
        res.status(200).json({ message: 'File uploaded successfully!' });
        try {
            await writeFile(`${FILES_DB_PATH}`, JSON.stringify(filesData))
            await writeFile(`${DIRECTORIES_DB_PATH}`, JSON.stringify(directoriesData))
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    req.on('error', (err) => {
        console.log('Connection Lost with the client')
    })
})

// Update Feature
// send a query - url?newName='value'
filesRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const filedata = filesData.find((file) => file.id === id);
    // res.send({filedata, id})
    // console.log(id)
    // console.log(filedata)

    filedata.filename = req.query.newName;
    const oldFileName = `${id}${filedata.extension_name}`
    filedata.extension_name = path.extname(req.query.newName)
    const newFileName = `${id}${filedata.extension_name}`
    try {
        await rename(`${STORAGE_DIR_PATH}/${oldFileName}`, `${STORAGE_DIR_PATH}/${newFileName}`)
        await writeFile(`${FILES_DB_PATH}`, JSON.stringify(filesData))
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong while updating the data in filesDB' });
    }
    res.status(200).json({ message: 'File renamed successfully' });
})

// Delete feature
filesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const filedata = filesData.find((file) => file.id === id);
    const parentId = filedata.parentDirId;
    try {
        await rm(`${STORAGE_DIR_PATH}/${filedata.id}${filedata.extension_name}`);
        const newFileData = filesData.filter((file) => file.id !== id);
        await writeFile(`${FILES_DB_PATH}`, JSON.stringify(newFileData))

        const newDirData = directoriesData.find(dir => dir.id === parentId);
        newDirData.files = newDirData.files.filter(fileid => fileid !== id);
        await writeFile(`${DIRECTORIES_DB_PATH}`, JSON.stringify(directoriesData))
        res.status(200).json({ message: 'File deleted successfully' })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export default filesRouter