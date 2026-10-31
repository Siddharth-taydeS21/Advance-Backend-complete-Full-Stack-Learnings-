import fs from 'fs';
const fd1 = fs.openSync('app.js')
const fd2 = fs.openSync('output.txt')
const fd3 = fs.openSync('package.json')

console.log(process.stdin.fd)
console.log(process.stdout.fd)
console.log(process.stderr.fd)
// 0, 1, and 2 are by default assigned to the data Streams of process objects, by the operating system. 
console.log(fd1)
console.log(fd3)
console.log(fd3)
// File descriptors of custom files can be anything but not a negative number or 0, 1 and 2