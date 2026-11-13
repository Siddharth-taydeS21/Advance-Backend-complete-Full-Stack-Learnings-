import net from 'node:net';
import fs from 'node:fs/promises'

const server = net.createServer(async (socket) => {
    const filehandle = await fs.open('text-content.txt');
    const { size } = await filehandle.stat()
    const readable = filehandle.createReadStream({ highWaterMark: 32 })

    //HTTP HEADERS
    socket.write('HTTP 200 OK \n')
    socket.write('Access-Control-Allow-Origin: * \n')
    socket.write('Content-Type: text/txt \n')
    socket.write(`Content-Length: ${size} \n`)
    socket.write('\n\n')

    //HTTP RESPONSE BODY
    readable.on('data', (chunk) => {
        socket.write(chunk)
        readable.pause()
        setTimeout(() => {
            readable.resume()
        }, 100)
    })

    socket.on('error', (err) => {
        console.log('Client disconnected..')
    })

    readable.on('error', (err) => {
        console.log('Something went wrong, Status 500')
    })

    readable.on('end', (err) => {
        console.log('File transfer done.')
    })
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Server has started on PORT 4000');
})