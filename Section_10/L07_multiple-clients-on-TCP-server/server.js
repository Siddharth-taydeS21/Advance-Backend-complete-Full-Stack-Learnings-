import net from 'node:net';

let clientList = [];

const server = net.createServer((socket) => {
    clientList.push(socket)
    console.log(`${clientList.length} clients are connected.`)

    socket.on('data', (chunk) => {
        const clientId = chunk.toString().split(' ')[0];
        const message = chunk.toString().split(' ').slice(1).join(' ')
        const newId = clientId - 1

        if(clientId > clientList.length || clientId.length > 1){
            console.log("The client you are trying to access, not exists.");
        }else if(clientId === '0'){
            console.log(chunk.toString().split(' ').slice(1).join(' '))
        }
        else{
            clientList[newId].write(message)
        }
    })

    socket.on('error', () => {
        console.log('Connection with the client Lost..')
        clientList = [];
    })

    socket.on('end', () => {
        console.log('Client disconnected..')
    })
})

server.listen(4000, () => {
    console.log('Server is running on Port 4000')
})