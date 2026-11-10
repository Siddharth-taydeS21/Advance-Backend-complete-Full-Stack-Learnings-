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