import dgram from 'node:dgram';
import { createReadStream } from 'node:fs';

const socket = dgram.createSocket('udp4');

const readstream = createReadStream('/mnt/c/Users/admin/OneDrive/Desktop/text.txt');

readstream.on('data', (chunk) => {
    socket.send(chunk, 4000)
})

readstream.on('end', () => {
    console.log('readstream ended..')
    socket.close()
})

socket.send('EOF', 4000)

socket.on('message', (msg, clientInfo) => {
    console.log(msg.toString())
})