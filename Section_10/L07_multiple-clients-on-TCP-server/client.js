import net from 'node:net';

const client = net.createConnection({ host: '10.253.127.218', port: 4000 });

client.on('data', (chunk) => {
    console.log(chunk.toString())
})

client.on('error', (err) => {
    console.log('Connection with the Server Lost..')
})

process.stdin.on('data', (chunk) => {
    client.write(chunk);
})