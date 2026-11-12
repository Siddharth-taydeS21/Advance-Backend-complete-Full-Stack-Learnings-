# (this are Practical Implementations of methods events and object-props form lectures, Not definitions and deep theory)
## Lecture 1, 2 - Creating a `UDP server` in Node.js  

- Explored about the `dgram` module and `createSocket()` method of `dgram` module in Node.js. 
- Created a UDP server and created a UDP client using the `createSocket` method.
- Made my Android mobile a UDP client using a UDP server application in the Android Play Store. 
-  Made my Android mobile a UDP server using that same application.

---

## Lecture 4 - File transfer using UDP server and client

- Created a UDP server using the `dgram` module. 
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

## Lecture 6 - Creating a TCP Client in Node.js 

- Created a TCP client in JS using the `net.createConnection` method and its different events. 
- Connected the TCP server and the TCP client on the same IP address and network, and shared data between them. 
- Experimented with read stream: read the file from the client and sent it over the network to the server. 
- From the server, received the data which was sent from the client and made a new file using the `fs` module of Node.js. 

--- 

## Lecture 7 - creating multiple TCP clients 

- made a js file where i written a TCP server code. after running this file using terminal its became the server.
- Made a second JS file where I written TCP client code. After running this file from different terminals and multiple terminals, I connected multiple TCP clients with a single TCP server. 
- Implemented a custom logic where an individual TCP client can write text in a terminal. Before writing the text, it will provide a number, and according to that number, the message will be forwarded to that client which are the number. For example, if we write `to` before writing a message in the terminal, the message will be forwarded to the second client connected with the TCP server. 
- Implementing that logic was so time-consuming and complex but I implemented it. It was not perfect. There are too many bugs, but I achieved the desired behavior. 

## Lecture 8 - File upload operations using multiple TCP clients 

- Created a TCP server and connected multiple clients with it using the previous implementation in Lecture 7. 
- This time, implemented a logic where an individual TCP client can send a text files to the server, and the server will send that text file to all connected TCP clients except the TCP client which had sent that text file. 

## Lecture 9 - HTTP server using the `net` module 

- Created a TCP server and accessed using Browser. 
- Read different files, such as video and image files, from the local server directory, with the help of a readable stream, sent those files the browser because the browser was connected as a client in socket with the TCP server. 
- Send that video and image files to the browser as HTTP requests using out TCP server, because the browser only understands HTTP requests. 

## Lecture 10 - Setting HTTP response headers on response in TCP server code 

- Created a TCP server and learned about how to add HTTP response headers to response TCP server while the server is sending a response to an HTTP client. 
- Experimented with accessing the server using a browser as an HTTP client, then accessing the same server using an HTML localhost server as an HTTP client. 
- cross checked with Inspecting the response headers in Chrome's Developer Tool's Network tab.

## Lecture 11 - Important HTTP headers 

- Learned about how we can set HTTP response hearers to outgoing http response object
- explored different response hearers such as - 
    - `Content-length` : for automatically ending the upload operation after successful upload
    - `Content-type` : for previewing the file
    - `Content-disposition: attachment` : for automatic download fo file
    - `Content-disposition: attachment; filename={custom file name}` : for downloading the file as custom file name. 
- initialized file previews, file uploads, file downloads on browser using a TCP server and browser as client.
- learned about how browser understands the Content related response headers and initialize the different file operations lie previews, uploads, downloads without the any need of server side logic.