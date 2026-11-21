import express from 'express';
import { readdir } from 'node:fs/promises';

const app = express();
app.use(express.json())

app.use((req, res, next) => {
    if(req.query.action === 'download'){
        res.set({ 'Content-Disposition': 'attachment' })
    }else{
        res.set({ 'Content-Disposition': 'inline' })
    }
    next()
})

app.use(express.static('storage'))

app.get('/', async (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' })
    const ItemsList = await readdir(`./storage`, { withFileTypes: true })
    const responseArray = []
    ItemsList.forEach((item) => {
        const newEntry = { ...item, isDirectory: false, isFile: false }
        if (item.isDirectory()) newEntry.isDirectory = true;
        else if (item.isFile()) newEntry.isFile = true;
        responseArray.push(newEntry)
    })
    res.send(responseArray)
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})