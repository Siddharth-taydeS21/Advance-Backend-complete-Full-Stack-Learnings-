import fs from 'fs';

const readable = fs.createReadStream(
    '/mnt/c/Users/admin/Videos/Movies/The.Terminal.List.S02E01.1080p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.mkv', 
    { highWaterMark: 1 * 1024 * 1024 }
)

console.time()

const writable = fs.createWriteStream('converted-video.mp4', { highWaterMark: 1 * 1024 * 1024 });

readable.on('data', (chuck) => {
    writable.write(chuck);
})

readable.on('end', () => {
    console.timeEnd();
})