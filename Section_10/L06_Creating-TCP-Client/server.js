import net from 'node:net';

const server = net.createServer((socket) => {
    console.log('Client connected..');

    socket.on('data', (chunk) => {
        console.log(chunk.toString())
    })

    socket.on('error', () => {
        console.log('Connection with the client Lost..')
    })

    socket.on('end', () => {
        console.log('Client disconnected..')
    })
})

server.listen(4000, () => {
    console.log('Server is running on Port 4000')
})