// import { createReadStream } from 'node:fs';
import net from 'node:net';
import fs from 'node:fs/promises'

const server = net.createServer(async (socket) => {
    // UPLOADED A BIG VIDEO FILE ON THE BROWSER
    // const filehandle = await fs.open("C:\\Users\\admin\\Videos\\Movies\\Project.Hail.Mary.2026.iMAX.720p.DS4K.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ag.mkv")

    // UPLOADED A PDF FILE ON THE BROWSER
    // const filehandle = await fs.open("pdf-file.pdf")

    // UPLOADED AN IMAGE FILE ON THE BROWSER
    const filehandle = await fs.open("C:\\Users\\admin\\Videos\\Movies\\Project.Hail.Mary.2026.iMAX.720p.DS4K.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ag.mkv")

    const { size } = await filehandle.stat()
    const readable = filehandle.createReadStream() 

    socket.write('HTTP 200\n')
    socket.write('Access-Control-Allow-Origin: *\n')

    // MIME TYPE FOR TEXT FILE
    // socket.write('Content-type: text/tex; charset-utf8 \n')

    // MIME TYPE FOR PDF FILE
    socket.write('Content-Type: video/x-matroska \n')
    socket.write('Content-Disposition: attachment; filename=project-hailmary.mkv \n')

    // MIME TYPE FOR VIDEO FILE
    // socket.write('Content-type: video/mkv \n')
    socket.write(`Content-Length: ${size} \n`)
    socket.write("\n\n")

    // AUTOMATIC BACKPRESSURE HANDLING WITH PIPE METHOD 
    // readable.pipe(socket)

    // MANUAL BACKPRESSURE HANDLING
    // readable.on('data', (chunk) => {
    //     if(!socket.write(chunk)){
    //         readable.pause()
    //     }    
    // })
    // socket.on('drain', () => {
    //     readable.resume()
    // })

    // MANUAL BACKPRESSURE HANDLING FOR SLOW DOWNLOAD AND UPLOAD SPEED
    readable.on('data', (chunk) => {
        socket.write(chunk)
        readable.pause()
        setTimeout(() => {
            readable.resume()
        }, 10);
    })

    // socket.end()
    socket.on('data', (chunk) => {
        console.log(chunk.toString())
    })

    socket.on('pause', () => {
        console.log('Connection paused')
    })

    readable.on('resume', () => {
        console.log('Connection resumed')
    })

    readable.on('end', (err) => {
        console.log('Connection disconnected')
    })
})

server.listen(4000, '0.0.0.0', () => {
    console.log('Server started on prot 4000')
})

/*
important response headers -

Content-length, for automatically ending the upload operation after successful upload
Content-type, for previewing the file
Content-disposition: attachment, for automatic download fo file
Content-disposition: attachment; filename={custom file name}, for downloading the file as custom file name. 
*/