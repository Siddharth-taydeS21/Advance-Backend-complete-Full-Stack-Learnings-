// import { createReadStream } from 'node:fs';
import net from 'node:net';

const server = net.createServer((socket) => {
    socket.write('HTTP 200\n')
    socket.write('Access-control-Expose-Headers: *\n')
    socket.write('Access-Control-allow-origin: *\n')
    socket.write('Hello-world: I-am-siddharth \n')
    socket.end()

    socket.on('data', (chunk) => {
        console.log(chunk.toString()) 
    })

    socket.on('error', (err) => {
        console.log('Connection lost: something went wrong..')
    })
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Server started on prot 4000')
})