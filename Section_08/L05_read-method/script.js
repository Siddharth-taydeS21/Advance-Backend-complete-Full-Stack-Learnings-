import fs from 'fs';

const readable = fs.createReadStream('chars.txt', { highWaterMark: 4 });

readable.on('readable', () => {
    // console.log(readable.readableLength)
    console.log(readable.read())
    // console.log(readable.readableLength)
})

// ========== MORE EVENTS ON A READABLE STREAM ===========
readable.setEncoding('utf-8')
readable.destroy({message: 'Manual error'})


readable.on('close', () => {
    console.log('stream closed..')
})
readable.on('end', () => {
    console.log('stream Ended..')
})
readable.on('error', (err) => {
    console.log('Stream Errored with: ', err)
})
readable.on('ready', () => {
    console.log('stream Ready..')
})
readable.on('open', () => {
    console.log('stream Opened..')
})
