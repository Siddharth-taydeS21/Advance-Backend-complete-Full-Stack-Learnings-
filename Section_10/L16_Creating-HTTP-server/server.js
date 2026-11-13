import http from 'node:http';

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    
    // WHEN WE LISTEN ON REQUEST STREAM FOR DATA, IT ONLY GIVES US THE REQUEST BODY AND NOT REQUEST HEADERS
    req.on('data', (chunk) => {
        console.log('Got the data on request')
        console.log(chunk.toString())
    })
    
    // FOR GETTING REQUEST HEADERS WE MUST EXPLICITLY NEED THE `req.headers` PROPERTY OF REQUEST OBJECT/STREAM
    console.log(req.url)
    console.log(req.headers)

    res.write('Got the data thanks');
    res.end()
});

// WHEN LISTEN FOR `data` EVENT ON RETURNED BY HTTP SERVER IT GIVE BOTH : THE REQUEST HEADERS AND THE REQUEST BODY
server.on('connection', (socket) => {
    socket.on('data', (chunk) => {
        console.log('Got the data in socket')
        console.log(chunk.toString())
    })
})

// server.on('request', (req, res) => {
//     res.setHeader('Content-Length', '22')
//     res.write('Hello from http server!')
// })

server.listen(4000, '0.0.0.0', () => {
    console.log(server.address());
    console.log('server is running on port 4000')
})