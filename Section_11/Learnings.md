## Lecture 1, 2 - Hello world in Express.js -

- Created a basic Http server using express js that sends Hello world response to the client 
- compared the difference between **Http server by HTTP module** vs **Http server by Express**.
- when we send response form the HTTP server it sends the response with default **'Content-type: 'text/txt'** response header; but when we send the response form Express server it sends the response with **'Content-type: 'text/html; charset=utf-8'** and a custom header - **'x-powered-by : Express'**.

## Lecture 3 - Middlewares in Express - 

- **Middleware functions** - Middle are the function which has access to every request and response on a certain route. they run before the request and response reaches the handler function. every middleware has access of next middleware or handler function as **next()** argument. 

- **next() argument** - it represents the next middleware or the handler on a particular route. we can pass the request to the next middleware by calling the next() without passing any argument. or we can invoke the any custom error handler middleware or Express's default error handling flow buy passing an error or any truthy value to the next() call. 

- **Request handler Middlewares** - they can only process the request and response objects. it always has the access of 3 or 2 params - 'req, res'/'req, res, next'. they invoke and get executed, one after one.

- **Error handler Middlewares** - an error handler middleware has access on **err** object. it only gets invoked on 2 conditions: 
    - when an error occurred on a certain or global route
    - when we explicitly pass error to the **next()** call
they can handle the error without the server crash and can end the response. 

## Lecture 4, 5 - 

- Handled multiple routes in Express server, such as `app.get`, `app.post`, `app.put`, and `app.delete` and used `Postman` as a client for sending different HTTP requests. 
- Difference between `url` and `routes`

## Lecture 6, 7, 8, 9 - 

- Adding global middlewares using the `app.use(handler callback)` method, which is used for registering middlewares globally or on specific route
- Adding route-specific middlewares using `app.use('/specific-route', handler_callback)` 
- Explored some default middlewares provided by Express.js, such as `express.json` and `express.static`. 
    - We use `express.json` to automatically parse the JSON data from incoming HTTP requests. 
    - We use `express.static()` to serve static files on the server. We give the exact folder name, such as `dist` or `public`, in the `express.static` call to tell the server where it needs to find the file to serve on the server. 
- Learned about how to serve files on the HTTP server in an optimized and fast way using `express.static` and `response.sendFile` methods. 

## Lecture 10 - 

- creating the file storage app backend using Express.js
- used express.json middleware for dir content serving along with readdir method
- used express.static middleware for files serving 
- used custom middleware for checking the query - "download" and set header using res.set method for downloads  

## Lecture 11, 12 -

- Added create, read, update, and delete functionalities in our mini storage app's Express backend
- Used different request and response headers like - Access-Control-Allow-Methods and Access-Control-Allow-Headers for accepting JSON data from the client.   
- Used different app routes for handling the operations like read, update, and delete. 
- For implementing update functionality on backend storage, use a 'PATCH' route along with native Node.js file system methods such as `fs.rename`.
- For implementing Delete functionality, used response header - `Content-Disposition-Attachment`. 
- For implementing create/update functionality, used a combination of a custom writable stream, along with the `pipe` method for handling automatic backpressure while writing/assembling the file on the server.

