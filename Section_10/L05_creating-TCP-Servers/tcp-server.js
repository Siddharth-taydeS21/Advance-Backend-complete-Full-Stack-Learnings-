/*
Tcp server creation ✅ 
tcp events - ✅ 
on connection ✅ 
on data ✅ 
how to access the socket after connection ✅ 
on socket disconnect ✅ 

using mobile as tcp client ✅ 
connect browser as tcp client ✅

connect multiple clients to the server - phone and browser

connect the browser as client and the socket w'll get is a duplex stream we can write http response to the browser and the browser will render it as a webpage ✅ 
*/
import net from 'net';

const server = net.createServer((socket) => {
  console.log("Client address : ", socket.remoteAddress)
  console.log("Client port : ", socket.remotePort)
  console.log("Protocol : ", socket.remoteFamily) 

  // ========== WHEN THE CLIENT IS MOBILE PHONE ========== //
  socket.on('data', (chunk) => {
    console.log(chunk.toString())
  })

  // ========== WHEN THE CLIENT IS BROWSER ========== //
  socket.write('HTTPn\n\nClient connected, Message: Nice to meet you..')
  socket.end();

  socket.on('end', () => {
    console.log('Client Disconnected')
  })
})

server.on('connection', () => {
  console.log('Client connected..!')
})

server.listen(4000, '0.0.0.0', () => {
  console.log('Server is running at port: 4000')
})