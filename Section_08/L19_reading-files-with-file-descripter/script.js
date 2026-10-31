import fs from 'fs';


// const fd = fs.openSync('text.txt');
// console.log(fd)

// ======== READING FILES WITH A FILE DESCRIPTOR ========
// const customBuffer = Buffer.alloc(30) 

// fs.read(
//     fd,
//     { 
//         buffer: customBuffer, // assigned custom buffer for flexible buffer size
//         position: 11, // the index position form the the content should be read
//         length: 9, // how many bytes of data should be read
//         offset: 2 // write the data form this index position and left the previous positions with 00
//     }, 
//     (err, bytesRead, ContentBuffer) => {
//         console.log(err);
//         console.log(bytesRead);
//         console.log(ContentBuffer);
//         console.log(ContentBuffer.byteLength);
//         console.log(ContentBuffer.toString());
//     }
// )

// ======== WRITING FILES WITH A FILE DESCRIPTOR ========

const fd = fs.openSync('new-text.txt', 'w');

const data = Buffer.from('siddharth')

fs.write(fd, data, (err, bytesWritten, contentWritten) => {
    console.log(err)
    console.log(bytesWritten)
    console.log(contentWritten)
})
