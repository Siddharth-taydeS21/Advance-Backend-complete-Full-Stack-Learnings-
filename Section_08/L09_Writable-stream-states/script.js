import fs from 'fs';

const writable = fs.createWriteStream('text.txt')

writable.write('a')
writable.write('b')
writable.write('c')
writable.write('d')
writable.write('e')

writable.end('Streams ended with this massage..')

writable.on('finish', () => {
    console.log('Stream finished..')
})

writable.on('close', () => {
    console.log('Stream closed..')
})