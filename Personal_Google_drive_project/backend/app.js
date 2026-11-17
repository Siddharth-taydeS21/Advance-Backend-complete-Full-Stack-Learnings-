import http from 'node:http';
import fs, { readdir, rm } from 'node:fs/promises';
import mime from 'mime-types';
import { createWriteStream } from 'node:fs';

async function showDirContent(req, res, fileDescriptor) {
    const [DirName] = decodeURIComponent(req.url).split('?');
    const ItemsList = await readdir(`storage${DirName}`, { withFileTypes: true });
    const responseArray = []
    ItemsList.forEach((item) => {
        const newEntry = { ...item, isDirectory: false, isFile: false }
        if (item.isDirectory()) newEntry.isDirectory = true;
        else if (item.isFile()) newEntry.isFile = true;
        responseArray.push(newEntry)
    })
    // console.log(responseArray)
    res.end(JSON.stringify(responseArray))
    if (req.url !== '/') await fileDescriptor.close()
}
//href="${DirName === '/' ? '/' : DirName + '/'}${entry.name}?action=preview"
//href="${DirName === '/' ? '/' : DirName + '/'}${entry.name}?action=download"

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, DELETE'
    );

    if (req.method === 'GET') {
        if (req.url === '/') {
            showDirContent(req, res)
        } else {
            if (!req.url.startsWith('/favicon.ico') && !req.url.startsWith('/.well-known')) {
                console.log(req.url)
                const queryPrams = {}
                const [fileName, queryString] = decodeURIComponent(req.url).split('?');
                const entries = queryString.split('&');
                entries.forEach((entry) => {
                    const [key, value] = entry.split('=');
                    queryPrams[key] = value
                })
                const FileNameString = `${fileName.startsWith('/images/') ? fileName.replace('/images/', '') : fileName.replace('/', '')}`
                console.log(FileNameString)
                const filehandle = await fs.open(`./storage${fileName}`);
                const stat = await filehandle.stat()
                const readable = filehandle.createReadStream();
                if (stat.isDirectory()) {
                    showDirContent(req, res, filehandle)
                } else {
                    if (queryPrams.action === 'preview') {
                        res.setHeader('Content-Type', `${mime.lookup(fileName)}`)
                        readable.pipe(res);
                        readable.on('end', async () => { await filehandle.close() })
                        readable.on('close', async () => { await filehandle.close() })
                        readable.on('err', async () => { await filehandle.close() })
                    }
                    else if (queryPrams.action === 'download') {
                        res.setHeader(`Content-Disposition`, `Attachment; filename="${FileNameString}"`)
                        res.setHeader('Content-Length', stat.size)
                        readable.pipe(res);
                        readable.on('end', async () => { await filehandle.close() })
                        readable.on('close', async () => { await filehandle.close() })
                        readable.on('err', async () => { await filehandle.close() })
                    }
                }
            }
        }
    }
    else if (req.method === 'OPTIONS') {
        res.end('OK')
    }
    else if (req.method === 'POST') {
        let count = 0;
        const writable = createWriteStream(`./storage/${req.headers.filename}`);

        req.on('data', (chunk) => {
            count++;
            // console.log( `Chunk ${count}: ${chunk.length} bytes`);
        });

        req.on('error', (err) => {
            console.log('Request error:', err.code);
        });

        writable.on('finish', () => {
            console.log('Total chunks:', count);
            res.end('File uploaded successfully!');
        });

        writable.on('error', (err) => {
            console.log('Writable error:', err);
        });

        req.pipe(writable);
    }
    else if (req.method === 'DELETE') {
        req.on('data', async (chunk) => {
            try {
                await rm(`./storage/${chunk.toString()}`);
                res.end('File is deleted successfully.')
            } catch (error) {
                res.end('Error :', error)
            }
        })
    }
})

server.listen(3000, '0.0.0.0', () => {
    console.log('Server is running at Port 3000')
})