// MANUAL WAY WITH OUT pipe() or unpipe() METHODS 
import fs from 'node:fs';
import { pipeline } from 'node:stream';

const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

readable.on('data', (chunk) => {
    writable.write(chunk);
})

readable.on('end', () => {
    console.log('file has written successfully..')
})

// IMPLEMENTATION WITH pipe() AND unpipe() METHODS
// IT REQUIRES MANUAL ERROR HANDLING ====
const readable2 = fs.createReadStream('input.txt');
const writable2 = fs.createWriteStream('output.txt')

readable.pipe(writable2);

setTimeout(() => {
    readable2.destroy(new Error('Something went wrong..'))
}, 2)

// needs manual code fro error handling...
readable2.on('error', () => {
    console.log('khatam')
})

readable2.on('end', () => {
    console.log('file has written successfully..')
})

// IMPLEMENTATION WITH pipeline() FUNCTION BY 'stream' MODULE
const readable3 = fs.createReadStream('input.txt');
const writable3 = fs.createWriteStream('output.txt')

pipeline(readable3, writable3, (err) => {
    console.log(err)
})