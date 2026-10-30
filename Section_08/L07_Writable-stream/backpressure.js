import fs from 'fs';

// const readable = fs.createReadStream('chars.txt', { highWaterMark: 4 });

// const writable = fs.createWriteStream('text.txt', { highWaterMark: 2 })

// readable.on('data', (chunk) => {
//     const isEmpty = writable.write(chunk);
//     if (!isEmpty) {
//         readable.pause();
//     }
// })

// writable.on('drain', () => {
//     readable.resume()
// })

const readable = fs.createReadStream('/mnt/c/Users/admin/Videos/Movies/The.Terminal.List.S02E01.1080p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.mkv'
)

const writable = fs.createWriteStream('converted-file.mp4')

console.time()

readable.on('data', (chunk) => {
    const isEmpty = writable.write(chunk);
    if (!isEmpty) {
        readable.pause();
    }
})

writable.on('drain', () => {
    readable.resume();
})

readable.on('end', () => {
    console.timeEnd()
})