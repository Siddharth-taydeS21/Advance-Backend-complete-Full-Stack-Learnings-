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

## Lecture 13, 14 - Understanding CORS Policy and Preflight request 

- **CORS** - It stands for Cross-Origin Resource Sharing Policy. It's the browser's security mechanism, which lets the server specify which different origins can access its resources. By default, the browser uses **SOP**, which stands for Same Origin Policy. It means that, by default, the browser will block fetch or XMLHttpRequest unless the client's origin matches the server's protocol, IP address/domain, and port. 

- **Preflight Requests** - Some requests, by default, do not trigger CORS preflight. Those requests are called **simple requests**. GET, POST, and HEAD methods Are the examples of simple requests. Clients connected with servers send the preflight requests for checking the allowed methods and headers by the server. For enabling preflight requests and OPTIONS requests, we can use the `cors` package, which automatically/dynamically allows all HTTP request methods which we define on our server side. It also dynamically allows the `request headers` which a client sends while accessing the resources of the server via fetch and XMLHttpRequests. 

## Lecture 15, 16, 17, 18, 20 - Adding Directory and nested Directories preview feature - 

- Implemented client-side routing using React Router DOM. Used the `useParam` hook.
- Implemented file operations in nested and multilevel nested directories. Used `react-router-dom` and its `useParams` hook effectively to know which folder or file the user is currently browsing. Sent that path of the user to the server with various HTTP requests, such as GET, POST, PATCH, and DELETE. On the server, for each HTTP request, a different operation is defined. 
- Implemented directory creation and directory deletion functionality in the root directory and multi-level nested directories.
- Understanding the file traversal vulnerability in our banking project and fixing it
- Separating different route handlers in different modules in a dedicated routes folder (refactor and separation of concerns)

## Lecture 21 - Creating a virtual file system (Previous project with a new and security-wise best and scalable approach)

- Handling POST route First :
    - getting the files with post method 
    - storing them only in storage folder (single source of truth)
    - storing files in storage directory while adding the metadata about the file in dedicated filesDB.json
- how we can file in storage dir & store the metadata about the file in filesDB.json :
    - making the new file name with `crypto.randomUUID` and preserving the uploaded file extension with `path.extname`. The new file name will be created using a `crypto.randomUUID` and the extension name of that file, and the file will be stored in the storage directory. 
    - adding the id, extension name, filename with extension and the size(optional) of in filesDB.json. - first reading it as text -> stringify -> push new data -> write it where it was with new data.
- Handling the get route : 
    - Destructure the unique file ID from the GET request URL
    - Looking for that ID in fileDB.json. 
    - response.sendFile('./storage/fileid+extName') -> fileID+file extension (from the storage dir)
- Handling the patch (rename) route  :
    - Accepting the id of the file which will be renamed, along with a query called "newName", where the user can send the new name of the file with the patch request
    - Extracting the old file ID from `request.params` and extracting the new file name from `request.query` 
    - Accessing the resource file entry from filesDB.json using the id param in req.params to rename it and After renaming, adding it with the new name, and writing it in the fileDB.json. 
- Handling the delete route  :
    - Destructuring the unique ID from delete request parameters 
    - Finding the resource file in the storage directory first using its unique ID and extension name 
    - Then, using that same unique ID, removing the file entry from filesDB.json 
  

## Lecture 23: Implementations - 
- defined directories schema in directoriesDB.json file with child files and directories
- In the directory DB.json schema, just providing the IDs of child files or folders. But when the user fetches it using a GET request on the directory route, the user will not only see the IDs of child files or folders in the root directory, It can see the full object of that file or that folder in the directory schema. 
- When the user sends or posts a file on the files route in (post request), by default, the file will be stored in the root directory until and unless the user sends a dedicated `parentDirID` request header in the POST request. 
- When the user uploads a file, it will be added in the storage directory, and the entry will be added in filesDB.json and directoriesDB.json. If the user deletes it, it will be removed from all three sources: storage, filesDB.json and directoriesDB.json.

## Lecture 24 - Integrated the Backed API on the frontend 