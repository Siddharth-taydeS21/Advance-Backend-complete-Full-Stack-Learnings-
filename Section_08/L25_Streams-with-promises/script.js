import fs from 'fs/promises'

// creating readable stream 
const textFileHandle = await fs.open('text.txt', "r+")
const textFileReadStream = textFileHandle.createReadStream()

textFileReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
})

// creating writable stream 
const writeFileHandle = await fs.open('new-text.txt', "w+"); 
const textFileWriteStream = writeFileHandle.createWriteStream();
textFileWriteStream.write('I have became a Full stack developer')

textFileWriteStream.end()

textFileWriteStream.on('finish', () => {
    console.log('data written...')
})

// copying a file from desktop folder to project folder
const imageFileHandle = await fs.open('/mnt/c/Users/admin/OneDrive/Desktop/ghost-soldier.jpg', "r+")
const imageFileReadStream = imageFileHandle.createReadStream()

const writeImageFileHandle = await fs.open('converted-image.jpg', "w+")
const imageFileWriteStream = writeImageFileHandle.createWriteStream();

imageFileReadStream.pipe(writable3)