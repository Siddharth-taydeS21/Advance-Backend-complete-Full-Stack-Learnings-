import http from 'node:http';
import fs, { readdir } from 'node:fs/promises';
import mime from 'mime-types';

const buttonStyle = 'background-color: #007BFF; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; text-decoration: none;'

async function showDirContent(req, res, fileDescriptor) {
    let dynamicHTML = '';
    const [DirName] = decodeURIComponent(req.url).split('?');
    const ItemsList = await readdir(`storage${DirName}`, { withFileTypes: true });
    ItemsList.forEach((entry) => {
        if (entry.isFile()) {
            dynamicHTML += `
            <div style="width: 500px; display: flex; justify-content: space-between; align-items: center; gap: 1rem; text-transform: capitalize;">
                <p style="font-size: 20px; font-weight: bold; color: #333333; margin-top: 16px; margin-bottom: 8px;">🗃️${entry.name}</p>
                <div>
                    <a href="${DirName === '/' ? '/' : DirName + '/'}${entry.name}?action=preview" style="${buttonStyle}">Preview</a>
                    <a href="${DirName === '/' ? '/' : DirName + '/'}${entry.name}?action=download" style="${buttonStyle}">DownLoad</a>
                </div>
            </div>`
        } else {
            dynamicHTML += `
            <div style="width: 500px; display: flex; justify-content: space-between; align-items: center; gap: 1rem; text-transform: capitalize;">
                <p style="font-size: 20px; font-weight: bold; color: #333333; margin-top: 16px; margin-bottom: 8px;">📁${entry.name}</p>
                <div>
                    <a href="${DirName === '/' ? '/' : DirName + '/'}${entry.name}?action=preview" style="${buttonStyle}">Preview</a>
                </div>
            </div>`
        }
    })
    const htmlContent = await fs.readFile('boilerplate.html');
    res.end(htmlContent.toString().replace('dynamicHtml', dynamicHTML))
    if (req.url !== '/') await fileDescriptor.close()
}

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        showDirContent(req, res)
    } else {
        if (!req.url.startsWith('/favicon.ico') && !req.url.startsWith('/.well-known')) {
            const queryPrams = {}
            const [fileName, queryString] = decodeURIComponent(req.url).split('?');
            const entries = queryString.split('&');
            entries.forEach((entry) => {
                const [key, value] = entry.split('=');
                queryPrams[key] = value
            })
            const FileNameString = `${fileName.startsWith('/images/') ? fileName.replace('/images/', '') : fileName.replace('/', '')}`
            const filehandle = await fs.open(`./storage${fileName}`);
            const stat = await filehandle.stat()
            const readable = filehandle.createReadStream();
            if (stat.isDirectory()) {
                showDirContent(req, res, filehandle)
            } else {
                if(queryPrams.action === 'preview'){
                    res.setHeader('Content-Type', `${mime.lookup(fileName)}`)
                    readable.pipe(res);
                    readable.on('end', async () => {await filehandle.close()})
                    readable.on('close', async () => {await filehandle.close()})
                    readable.on('err', async () => {await filehandle.close()})
                }
                else if (queryPrams.action === 'download') {
                    res.setHeader(`Content-Disposition`, `Attachment; filename="${FileNameString}"`)
                    res.setHeader('Content-Length', stat.size)
                    readable.pipe(res);
                    readable.on('end', async () => {await filehandle.close()})
                    readable.on('close', async () => {await filehandle.close()})
                    readable.on('err', async () => {await filehandle.close()})
                } 
            }
        }
    }
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Server is running at Port 4000')
})

// tasks = 
// make a query params object and get query params form it ✅
// set content type res header using mime-type package 
// set content length ser header for file size  