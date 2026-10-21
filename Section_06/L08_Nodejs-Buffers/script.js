import {Buffer} from 'buffer';

// const arrayBuffer = new ArrayBuffer(4);

// const NodeBuffer = Buffer.from(arrayBuffer);

// const uintArray = new Uint8Array(arrayBuffer);

// uintArray[0] = 51;
// uintArray[1] = 52;
// uintArray[2] = 53;
// uintArray[3] = 54;

// console.log(NodeBuffer);

const normalBuffer = Buffer.alloc(4);
const NodeBuffer = Buffer.from([97, 98, 99, 100]);
console.log(normalBuffer.toString())
console.log(NodeBuffer.toString())