import dgram from 'node:dgram';
import { createWriteStream } from 'node:fs';

const writeStream = createWriteStream('bigfile.txt');
const socket = dgram.createSocket('udp4');

socket.on('message', (msg, clientInfo) => {
    if(msg.toString() === 'EOF'){
        console.log(msg.toString())
        socket.send('File received successfully..!', clientInfo.port, clientInfo.address)
    }else{
        writeStream.write(msg);
    }
})

socket.bind(4000, () => {
    console.log('Server is running on port 4000')
})