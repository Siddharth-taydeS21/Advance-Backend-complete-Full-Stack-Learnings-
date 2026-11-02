import http from 'node:http'
import fs from 'node:fs/promises'

const readFileHandle = await fs.open("text.txt", 'r+')
const readStream = readFileHandle.createReadStream({highWaterMark: 1})

const server = http.createServer(async(req, res) => {
    res.setHeader('access-control-allow-origin', "*");
    res.setHeader('Content-type', "text/txt")

    // res.end('Hello from http server..')
    readStream.on('data', (chunk) => {
        res.write(chunk) // reading data as single chunk
        readStream.pause()
        setTimeout(() => {
            readStream.resume() // pausing and resuming the flow to see the actual data retrieval
        }, 100)
    })

    readStream.on('end', () => {
        res.end()
    })
})

server.listen(8000, ()=> {
    console.log('Server started on 8000..')
})