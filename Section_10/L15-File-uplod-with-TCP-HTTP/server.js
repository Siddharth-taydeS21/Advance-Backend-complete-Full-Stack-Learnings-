import net from 'node:net';

const server = net.createServer(async (socket) => {
    //HTTP HEADERS
    socket.write('HTTP 200 OK \n\n')

    socket.on('data', (chunk) => {
        const regex = /WebKitFormBoundary.+--/;
        if (regex.test(chunk.toString())) {
            console.log(chunk.toString())
            socket.end('Got the data thanks..!')
        }
    })

    socket.on('error', (err) => {
        console.log('Client disconnected..')
    })
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Server has started on PORT 4000');
})