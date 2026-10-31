import { spawn } from 'child_process'
import { createWriteStream } from 'fs';

const childProcess = spawn('node', ['childProcess.js']);
const writable = createWriteStream('new-text-file.txt')

// childProcess.stdout.on('data', (chunk) => {
//     writable.write(chunk);
// })

childProcess.stdout.pipe(writable)