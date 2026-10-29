/*
Tasks - 

// read a file using a readable stream ✅

// create the file using the chunks of which the streams returns while reading (explore the 'data' & 'end' events on stream) ✅

// learn about the default chunk size which a stream uses to read a file ✅
// Ans - the default chunk size a readable stream uses is (64 kibiytes === 65,536 bytes); 

// learn to modify that size (how we can define the chunks size in MBbs) ✅
// we can modify this default chunk size using a highWaterMark config option which we can give as an objet property in createReadStream method.

*/
import fs from 'fs';

const readable = fs.createReadStream('/mnt/c/Users/admin/Videos/Movies/The.Terminal.List.S02E01.1080p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.mkv', {highWaterMark: 1 * 1024 * 1024 * 50});

let readCounts = 0;
console.time()
readable.on('data', (chuck) => {
    fs.appendFileSync('converted-video.mp4', chuck)
    readCounts++;
})
readable.on('end', () => {
    console.log(readCounts)
    console.timeEnd()
})