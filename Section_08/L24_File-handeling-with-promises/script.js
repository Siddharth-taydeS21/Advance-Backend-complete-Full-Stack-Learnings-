import fs from 'fs/promises';

// file open operation 
const fileHandle = await fs.open('text.txt', 'r+')

// file read operation 
const {buffer: readBuffer, bytesRead} = await fileHandle.read(); 
console.log(readBuffer.toString(), bytesRead)

// file write operation 
const {buffer: writeBuffer, bytesWritten} = await fileHandle.write('string data'); 
console.log(writeBuffer, bytesWritten)

// file close operation 
await fileHandle.close();