import { createReadStream } from 'node:fs'
import net from 'node:net'

const clientSocket = net.createConnection({ host: '10.253.127.218', port: 4000 })
let userID = crypto.randomUUID().split('-')[0];
let dataWritten = 0;

process.stdin.on('data', (chunk) => {
        clientSocket.write(`form user ${userID}: ${chunk.toString().trim()}`)
        dataWritten++
})

clientSocket.on('data', (chunk) => {
    process.stdout.write(`form user ${userID}: ${chunk.toString().trim()}`);
})

clientSocket.on('error', () => {
    console.log('Something went wrong from clientSocket..')
})