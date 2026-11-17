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

## Lecture 11, 12, 13, 14 - Important HTTP headers, File operations on browser, assignment task   

- Learned about how we can set HTTP response hearers to outgoing http response object
- explored different response hearers such as - 
    - `Content-length` : for automatically ending the upload operation after successful upload
    - `Content-type` : for previewing the file
    - `Content-disposition: attachment` : for automatic download fo file
    - `Content-disposition: attachment; filename={custom file name}` : for downloading the file as custom file name. 
- initialized file previews, file uploads, file downloads on browser using a TCP server and browser as client.
- learned about how browser understands the Content related response headers and initialize the different file operations lie previews, uploads, downloads without the any need of server side logic.
- Control the speed of uploads and downloads over the browser using manual backpressure handling while a readable stream is writing the data on the socket which is connected with the browser. 
- Used manual backpressure handling logic and set timeouts to make the download and uploads slow on the browser.
- Learned about how to inspect individual data packets in Wireshark application. 
    - a practical example of how the data sent in packets over the network when we work with streams in node js. 
    - made a TCP server and sent request on it using browser. the browser and TCP server was connected with a websocket.
    - inspected data packets and SNK, ACK, PSH request in Wireshark application. 

- completed a task : 
    - Created a TCP server and read a long text file using a readable stream 
    - Started a local server from an HTML file, While the HTML file and browser are connected as a client 
    - The TCP server and the browser were connected as a WebSocket. On the `data` event on the readable stream, written data on the socket as very small chunks with the help of the `highWaterMark` property, where a very small size for each readable chunk of readable stream was configured. 
    - On the client-side logic, read the small chunks and, after reading them, immediately written the small chunks to the browser's document element, making an automatic text-typing, text-generation effect like ChatGPT and AI LLM generation tools. 

## Lecture 15 - Uploading files on the server side in some browser 
- Created an HTML file where I added an input for files. When the user uploads a file, the file will be posted to our server as multipart form data. 
- After the file reaches the server, reading its binary content and using a writable stream to assemble that file chunk by chunk on our server. 
    
## Lecture 16 - Uploading files on the server side in some browser
- Started using the HTTP module for creating HTTP servers in Node.js 
- The HTTP module is built on the net module, and the HTTP requests are also TCP requests under the hood 
- Learned an important distinction: When we create an HTTP server using the HTTP module. Inside the `createServer` method, we had access to the `response` and `request` objects. The `response` and `request` objects are not anything else, The `request` object is a readable stream, and the `response` object is a writable stream. 
- The `http.createServer` method returns a server object. On that server object, we can listen for the connection event. After that event, we can pass a callback. In that callback, we receive a socket object, which is a direct connection between the browser and the HTTP server. 
- **Difference between the socket object returned by an HTTP server and the response and request objects of an HTTP server : -**
In the HTTP server, when we listen for the `request.on('data')` method, it only returns the request body. If the request body is empty, the `request.on('data')` method will never fire.

On the other hand, when we listen for the `connection` event of the server, it gives us access to the socket inside the callback. When we listen on that socket for the `data` event, it prints both - the headers of the request and the actual body of the request object.  

## Lecture 17, 18 - HTTP Request methods and HTTP Response status codes - 

Learned about -
- the most common HTTP request methods, such as GET, POST, PUT, PATCH, DELETE, HEAD and OPTIONS. 
- What is the purpose of each method
- What change does each method make to the server or database state
- Is each individual option **Idempotent** or not, Are they **Safe** or not, (If a request method is making any change in the state of the server or database, it is considered an unsafe request method Otherwise, it will be considered a safe method.) 

- Learned about the most common HTTP response status codes. What are the purposes of them, What do they mean when we send them with an HTTP response, How do the front-end and backend understands while sending response status codes.

## Lecture 19, 20 - Creating a basic STT client, Structure of HTTP request and response objects  
- Created a basic HTTP client for connecting with an HTTP server using the `http.request` method. 

- Learned about the basic structure of an HTTP response and an HTTP request. 
- **Structure of an HTTP Request** - 
    ```text
    <method> <path> <HTTP version>
    <Request header key>: <Request header value>
    <Request header key>: <Request header value>
    <Request header key>: <Request header value>
    ...

    -- Request body start (with \n\n) --```

- **Structure of an HTTP Response** -
    ```
    <HTTP version> <HTTP Status code> <<HTTP Status description (ex. - OK, Not found, Server Error)>
    <Response header key>: <Response header value>
    <Response header key>: <Response header value>
    <Response header key>: <Response header value>
    ...

    -- Response body start (with \n\n) --```

- Created a basic http server which servers local html css and js files ans text response on the localhost url when we go to this routes - /html, /js, /css.

## Lecture 21, 22, 23 - Started a Google Drive-inspired mini backend project

- Implemented a web server which serves local files in a directory, but this time used actual files to serve over the browser, such as text files, JPEG files, PDF files, and video files. 
- Started a basic project inspired by Google Drive, which can simply serve files over the browser with preview, download, and upload buttons. 
- Implemented preview and download functionality on the mini project :
 Key behaviors are: 
    - when the user types file names or folder names in the URL with the serer IP address, the user can preview the file or folder with content inside it . 
    - After implementing the preview functionality, added two buttons: Open and Preview, Download
    - When the user types a file name or folder name in the URL and provides a specific query param (like `action=preview` or `action=download`), the file or particular folder will start previewing or downloading. 
    - If the query param `action` is equal to `preview`, the file will be previewed on the browser using a response header: `response.setHeader('Content-Type', mimeType)`, where `mimeType` is the MIME type of that specific file. Used the `mime-type` npm package for getting the exact MIME type by providing the exact file. 
    - When the user provides a query param `action=download`, after the file name, the file will start downloading. Implemented the download functionality using the response header: `response.setHeader('Content-Disposition', 'attachment; filename={file name}')`. 
    - Added an extra edge case logic where, before previewing content inside a directory over the browser, the logic will check if the previewed item is a file or a folder. If it is a file, two buttons will be previewed with it: Preview and Download. If the item is a folder, only one button will be previewed with it: Preview.

## Lecture 24 - Client-side versus server-side rendering 

- **Client-side rendering** : 
    In client-side rendering, the browser downloads the raw HTML and JavaScript files with raw html css and JavaScript files. It fetches data from APIs and backends, then populates the data on the generated HTML and CSS pages, then loads it on the browser for users to interact with it.
    - **Advantages of client-side rendering**: lower server load, better user interactions, and UI/UX. 
    - **Disadvantages** : challenges in SEO, Extra logic for scalability & performance optimization. 

- **Server-side rendering** :
    In server-side rendering, first we fetch data from APIs and the backend. Then we create HTML and CSS pages on the server side. When the user wants it on the front-end, we send the populated HTML and CSS pages as a response to the client. 
    - **Advantages of client-side rendering**: Better for SEO, better speed, Low-end device-friendly
    - **Disadvantages**: Higher server-side load, Lack of interactivity and UI/UX, Lack of page transitions

## Lecture 25 - Integrated front-end in our backend project. 

- Created a front-end client folder for dedicated front-end client-side code using React. 
- Made changes in the backend project. The backend, or the server, will only send a response as JSON, and the frontend will consume it and handle the client-side rendering. 

## Lecture 26, 27 - added UI plus upload, and delete functionality 

- **Implemented upload functionality** on the server using the Fetch API and the POST HTTP request method. Collecting an input file or folder as a file input and sending that file with a POST request and request body to the server. The server will read that incoming file or folder as a readable stream and, by using a writable stream and the `pipe` method on the server, writing the folder or file into to storage directory in a fast way using streams.  
- **Implemented upload progress functionality** on the client side. For implementing this, used XHR (XML HTTP Request) instead of the Fetch API because XML provides us the ability to inspect the progress of a currently uploading file, and the Fetch API doesn't. Used the `xhr.upload` and its `progress` event to track the `loaded` and `total` properties. by calculating them both, Showed the progress of the upload as a percentage on the front-end. 
- **Implemented delete functionality** using the `delete` method of the Fetch API and sent the certain file name with the `delete` method as the body. The server will read the `req.body`, which is a file name sent by the front-end client. Then the server will remove that file from the storage folder, and the changes on the server and the front-end will be updated in real time. 