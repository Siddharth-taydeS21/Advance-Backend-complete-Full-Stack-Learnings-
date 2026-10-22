import {Buffer} from 'buffer';
import fs from 'node:fs/promises';

const nodeBuffer = Buffer.from('Hello World!');
console.log(nodeBuffer);

// ========== Most Common and Important methods on buffer object in node.js =========

/*
nodeBuffer.write
nodeBuffer.toString
nodeBuffer.toJSON
nodeBuffer.copy
nodeBuffer.fill
nodeBuffer.includes
nodeBuffer.join
nodeBuffer.subarray
nodeBuffer.readInt8
nodeBuffer.readUInt8
nodeBuffer.readInt16LE
nodeBuffer.readUInt16LE
nodeBuffer.readInt16BE
nodeBuffer.readUInt16BE
nodeBuffer.writeInt8
nodeBuffer.writeInt16LE
nodeBuffer.writeInt32LE
*/

// ========== Buffer.from() and nodeBuffer.toString() methods =================
// console.log(nodeBuffer)
// console.log(nodeBuffer.toString())
// fs.writeFile('text.txt', nodeBuffer);


// ========== nodeBuffer.write() method =================
// const nodeBuffer = Buffer.alloc(8);
// nodeBuffer.write('abc');
// console.log(nodeBuffer.toString())

// ========== nodeBuffer.toString() and .toJSON() method =================
// console.log(nodeBuffer.toString())
// console.log(nodeBuffer.toJSON())


// ========== nodeBuffer.copy() method =================
// const nodeBuffer2 = Buffer.alloc(8);
// nodeBuffer.copy(nodeBuffer2, 0, 6)
// console.log(nodeBuffer2.toString())

// ========== nodeBuffer.join() method =================
// const a = nodeBuffer.join(',') // elem1, elem2, elem3, ....

// // ========== nodeBuffer.subarray() method =================
// const subArray = nodeBuffer.subarray(6);
// // const subArray = nodeBuffer.subarray(6, 9); // 'Wor'
// console.log(subArray.toString())

// ========== nodeBuffer.read() methods =================
// console.log(nodeBuffer.readInt8(2))
// console.log(nodeBuffer.readUint8(5))

// console.log(nodeBuffer.readInt16LE(0))
// console.log(nodeBuffer.readInt16BE(0))
// console.log(nodeBuffer.readUInt16LE(0))
// console.log(nodeBuffer.readUint32BE(0))