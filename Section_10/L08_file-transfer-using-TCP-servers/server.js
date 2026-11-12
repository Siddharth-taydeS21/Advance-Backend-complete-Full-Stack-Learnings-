import { createWriteStream } from 'node:fs';
import net from 'node:net';

const writable = createWriteStream('converted-video.mkv')
let clientList = [];

const server = net.createServer((socket) => {
    clientList.push(socket);
    console.log(`${clientList.length === 1 ? `${clientList.length} client connected` : `${clientList.length} clients connected`}`)

    socket.on('data', (chunk) => {
        const otherSockets = clientList.filter(clientSocket => clientSocket !== socket)
        otherSockets.forEach((clientSocket, i) => {
            console.log(chunk.toString())
            clientSocket.write(chunk.toString())
        })
    })

    socket.on('error', (err) => {
        console.log('Connection lost: something went wrong..')
    })
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Server started on prot 4000')
})