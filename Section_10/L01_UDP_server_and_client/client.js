import  dgram  from "node:dgram";

const socket = dgram.createSocket('udp4')

socket.on('message', (msg, clientInfo) => {
    console.log(msg.toString())
    console.log(clientInfo)
})

socket.send("i am again connected..", 4000)
