import { channel } from 'node:diagnostics_channel';
import { createReadStream } from 'node:fs';
import http from 'node:http';

function writeFile(stream, res) {
    stream.on('data', (chunk) => {
        res.write(chunk)
        stream.pause()
        setTimeout(() => {
            stream.resume()
        }, 100);
    })
    stream.on('end', () => {
        res.end();
    })
}

const htmlFileStream = createReadStream('index.html', {highWaterMark: 16})
const cssFileStream = createReadStream('style.css', {highWaterMark: 16})
const jsFileStream = createReadStream('app.js', {highWaterMark: 16})

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/txt')
    switch (req.url) {
        case "/html":
            writeFile(htmlFileStream, res)
            break;
        case "/css":
            writeFile(cssFileStream, res)
            break;
        case "/js":
            writeFile(jsFileStream, res)
            break;
        default:
        res.end('Hello from http server..')
            break;
    }
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Server is started on port 4000')
})