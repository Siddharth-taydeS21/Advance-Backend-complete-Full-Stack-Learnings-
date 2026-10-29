import fs, { read } from 'fs';

const readable = fs.createReadStream('chars.txt', { highWaterMark: 4 });

readable.on('data', (chunks) => {
    const fileBuffer = fs.readFileSync('text.txt');
    if(fileBuffer.byteLength >= 64){
        fs.writeFileSync('text.txt', '');
    }
    fs.appendFileSync('text.txt', chunks);
    // console.log(chunks)
    readable.pause();
    setTimeout(() => {
        readable.resume()   
    }, 1000)
})

const writeable = fs.createWriteStream();


