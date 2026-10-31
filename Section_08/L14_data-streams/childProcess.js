import fs from 'fs'

const readable = fs.createReadStream('/mnt/c/Users/admin/Videos/Movies/text-file.txt');

// readable.on('data', (chunk) => {
//     process.stdout.write(chunk)
// })

readable.pipe(process.stdout)