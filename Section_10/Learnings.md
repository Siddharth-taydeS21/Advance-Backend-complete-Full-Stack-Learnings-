## Lecture 1, 2 - Creating a `UDP server` in Node.js  

- Explored about the `dgram` module and `createSocket()` method of `dgram` module in Node.js. 
- Created a UDP server and created a UDP client using the `createSocket` method.
- Made my Android mobile a UDP client using a UDP server application in the Android Play Store. 
-  Made my Android mobile a UDP server using that same application.

---

## Lecture 4 - File transfer using UDP server and client

- Created a UDP server using the Diagram module. 
- Integrated a writable stream inside the UDP server so the UDP server can write the incoming data in chunks, and it can write the chunks using a writable stream in a fast way. 
- Integrated a readable stream and a UDP client, so the client can read local data in a fast way. On the other side, it can send that data in chunks to the server, which is using a readable stream to write that data fast. 
- Experimented with sending a big text file sized 600 to 700 KB, then experimented with a video file sized 0.5 GB to 0.7 GB. 

---

## Lecture 5 - Creating a TCP server in Node.js 

- Created a TCP server using the `net` module and the `net.createServer` method in Node.js. 
- The `net.createServer` method returns a socket, which is a TCP server.
- We can pass a callback as the second argument to the `createServer` method. In that callback, we can access a socket object. **the socket object is a duplex stream.**   
- On that duplex stream (socket object), we can listen for different events, such as `socket.on('data')`, `socket.on('close')`, and `socket.on('end')`. 
- The server which is returned by the `net.createServer` method, we can listen for it by providing a custom port (which is a number). It will start a server on that port on our private IP address of our local machine.
- Experimented with how we can connect with the TCP server. Connected with the TCP server using a mobile and an application called UDP/TCP sender or receiver. 
- **Did a very crazy thing, like connecting with a TCP server using a browser, which only understands HTTP**. 
- The browser can successfully send HTTP requests to the TCP server because HTTP requests are based on TCP protocols. 
- Written code for the TCP server which can accept HTTP requests from the browser and send back an HTTP response to the server while being a TCP server itself 
- Connected multiple devices at once with the TCP server. Connected the mobile and browser together with TCP server.

---