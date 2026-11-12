import net from 'node:net';
import { createReadStream } from 'node:fs';

const readable = createReadStream('text.txt');

const client = net.createConnection({ host: '10.253.127.218', port: 4000 }, () => {
    console.log('Server Connected')
    client.write('Hello from Client👋')
});

client.on('error', (err) => {
    console.log('Connection with the Server Lost..')
})

client.on('connect', () => {
    readable.on('data', (chunk) => {
        client.write(chunk)
    })
})