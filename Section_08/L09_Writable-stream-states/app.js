import fs from 'fs'
const writable = fs.createWriteStream('new-file.txt');

// INITIAL STATE OF A WRITABLE STREAM - 
console.log(writable.writable);

// CROCKED STATE OF A WRITABLE STREAM -
writable.cork() // the data will stay in the internal buffer of a stream and it not be written in the file unless we unCrock the stream
console.log(writable.writableCorked);

writable.write('A')
writable.write('B')
writable.write('C')

writable.uncork();
console.log(writable.writableCorked);

// ENDED STATE OF A WRITABLE STREAM -
writable.end()
console.log(writable.writableEnded)

// ENDED STATE OF A WRITABLE STREAM -
setTimeout(() => {
    console.log(writable.writableFinished) // it needs some milliseconds of time to write the data on the disk, immediate checking of writable.writableFinished will always return false
}, 10) // true