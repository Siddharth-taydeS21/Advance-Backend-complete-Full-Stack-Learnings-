import  dgram  from "node:dgram";

const socket = dgram.createSocket('udp4')

socket.bind(4000, () => {
    const address = socket.address();
    console.log(address)
    console.log(`Server is running on port ${address.port}`)
})

socket.on('message', (msg, clientInfo) => {
    console.log(msg.toString())
    console.log('Client Info: ', clientInfo)
    socket.send('Message received successfully..', clientInfo.port, clientInfo.address)
})