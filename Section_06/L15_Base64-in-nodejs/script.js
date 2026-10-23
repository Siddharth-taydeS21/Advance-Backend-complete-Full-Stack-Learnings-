// Convert a small image file into a base64 string, then from that base64 string, make the raw image. 
// Practice this process with a bigger-sized image, a video, an audio file, and a CSS file to understand the base64 in Node.js on a deeper level. 
// what is base64url

import fs from 'fs/promises';

// CONVERTING A PNG FILE IN TO BASE64 STRING THEN CONVERTING THE BASE64 STRING IN TO PNG FILE

const pngBuffer = await fs.readFile('./raw-files/a.png', 'base64');
const pngBufferString = pngBuffer.toString();
fs.writeFile('./converted-files/new.png', pngBufferString, 'base64')



// CONVERTING A BIG JPG FILE IN TO BASE64 STRING THEN CONVERTING THE BASE64 STRING IN TO RAW JPG FILE

const imageBuffer = await fs.readFile('./raw-files/big-image.jpg', 'base64');
const imageBufferString = imageBuffer.toString();
// await fs.writeFile('./converted-files/big-image.txt', imageBufferString); // string version
await fs.writeFile('./converted-files/big-image.jpg', imageBufferString, 'base64');


// CONVERTING A VIDEO FILE IN TO BASE64 STRING THEN CONVERTING THE BASE64 STRING IN TO VIDEO FILE

const videoBuffer = await fs.readFile('./raw-files/video.mp4', 'base64');
const videoBufferString = videoBuffer.toString();

// await fs.writeFile('./converted-files/video.txt', videoBufferString);
await fs.writeFile('./converted-files/converted-video.mp4', videoBufferString, 'base64');


// CONVERTING A CSS FILE IN TO BASE64 STRING THEN CONVERTING THE BASE64 STRING IN TO CSS FILE
const cssBuffer = await fs.readFile('./raw-files/index.css', 'base64');
const cssBufferString = cssBuffer.toString();
// await fs.writeFile('./converted-files/css-base64text.txt', cssBufferString);
await fs.writeFile('./converted-files/converted-index.css', cssBufferString, 'base64');