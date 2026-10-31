## Lecture 1, 2: introduction to Node.js Streams

`Streams` in Node.js are the abstract interface for handling streaming the data in chunks instead of loading the full data directly onto the RAM. Streams are essential for making our application performant because it provides us with **low usage of memory/CPU** and **better execution time.**

It is based on top of Node.js's event-driven `EventEmitter` architecture. It becomes so beneficial when we need to work with big-size files, real-time data feeds, or network sockets. 

---

### Types Of Streams 

- #### 1. Readable Streams
Readable streams are used to **read data** from a source, such as reading files or receiving HTTP requests.

- #### 2. Writable Streams
Writable streams are used to **write data** to a destination, such as writing to a file or sending HTTP responses.

- #### 3. Duplex Streams
Duplex streams are streams that can do **both read and write data**. These are useful for situations like network communication, where you both send and receive data.

- #### 4. Transform Streams
Transform streams are a special type of duplex stream where the **output is a transformation of the input**. They modify or process the data as it passes through the stream, such as compressing or encrypting data.

---

## Lecture 3, 4 - Readable Streams

We can create a readable stream using the `fs.createReadStream()` method of the `fs` module. This method provided by the `fs` module accepts the file which will be read as the first argument. It accepts a configuration object as the second argument, where we can define the size of chunks. 

It returns an object which will be the eventual readable stream. On that returned object we can listen to events like `data` and `error`, etc. 

--- 

### Learned about -  
- Learned about how to read data in chunks using the `data` event on a readable stream and how to decode, collect, or reassemble them using a `fs.writeFile` method. 

- Learned about How to do something when a stream has finished reading a data file, Using the event called `end` on a readable stream.

---

### Readable Stream States

1. **Initial State**:

   - The stream is newly created. It hasn't started flowing or been paused, so no data is being consumed, and the stream hasn't ended. At this point, no reading action has been taken.
   - **`readableFlowing`: `null`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

2. **Flowing State**:

   - The stream is actively reading and pushing data automatically to the consumer via the `'data'` event. The stream hasn’t reached the end of its data yet.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `false`**

3. **Paused State**:

   - The stream is paused, meaning it’s not pushing data automatically.
   - **`readableFlowing`: `false`**
   - **`readableEnded`: `false`**
   - **`isPaused()`: `true`**

4. **Ended State**:
   - The stream has consumed all available data and emitted the `'end'` event. No more data will flow, and the stream is considered finished.
   - **`readableFlowing`: `true`**
   - **`readableEnded`: `true`**
   - **`isPaused()`: `false`**

---

### Readable Stream States Comparison Table

| Stream State      | `readableFlowing` | `readableEnded` | `isPaused()`                                    |
| ----------------- | ----------------- | --------------- | ----------------------------------------------------------- |
| **Initial State** | `null`            | `false`         | `false`              |
| **Flowing State** | `true`            | `false`         | `false`              |
| **Paused State**  | `false`           | `false`         | `true`               |
| **Ended State**   | `true`            | `true`          | `false`              |

---

## Lecture 5, 6 - 

### `readable` event and `read()` method and `Internal buffer` on readable stream 

- `readable` event : -  
We can listen for the `readable` event on a readable stream when the data is loaded in a chunk of a readable stream. 

- Internal buffer : -  
Internal buffers are the interface of chunks which a readable stream creates from a file or data which is being read. The default size of an internal buffer of a readable stream chunk is 64 KB. We can also redefine or modify this size using a property called `highWaterMark`. 

- `read()` method : -  
After listening for the `readable` event on a readable stream, we can later use The `readableStream.read()` method to read an individual chunk of a readable stream. We can also define how many bytes of data we are intended to read with the help of the `read` method. By passing a certain number in the `read` method call, we can define how many bytes of data should be read.  

---

### Explored Events & methods on a readable stream - 

```
javascript

readableStream.on('open', () => {}) // Do something when a readable stream is yet to read
readableStream.on('ready', () => {}) // Do something when a stream is ready to read.  
readableStream.on('error', (err) => {}) // Do something when a stream is destroyed and an error is passed with the `readableStream.destroy()` method. 
readableStream.on('end', () => {}) // Do something when a stream is ended without any error. 
readableStream.on('close', () => {}) // Do something when a stream has finished its reading. 
```

---

## Lecture 7, 8 - Writable streams, BackPressure  

- ### Writable streams -   

We can create a writable stream using the `fs.createWriteStream()` method provided by the `fs` module in Node.js. 
It provides a `write()` method which can accept chunks ideally passes through a readable stream. This method creates a new file from the data which we are reading with the help of `readStream`. 

- ### BackPressure -    
BackPressure in Node.js is a memory execution flow or mechanism where the fast data producer, like a readable stream, coordinates with a slow data processor, like a writable stream. A readable stream reads data in a 64 KB binary stream but a writable stream's default data writing buffer limit size is 16 KB. 

When a writable stream accepts or tries to process data that is more than 16 KB, it allocates those extra bytes in memory. This can make our application slow or it can throw ERR_OUT_OF_MEMORY errors. 

--- 

- ### How to handle BackPressure - 

  -  `write()` method of writable stream returns a true boolean flag when there is a space in the chunk of the writable stream, which indicates that more bytes of data can be written with the help of the `write` method in an iteration. Either it returns `false` if the chunk is full and there is no space to give extra bytes for the further writing operation. 

  - When the `write` method returns `false`, it means there is a signal that we need to pause the data flow to the `write` method (so it can take its time to write that data and drain that chunk). 
  We can pause the execution of a Redux stream using the `.pause()` method. 

  - When a `write` method chunk is drained properly, it will return `true`, which will indicate that the write method is free to process new data to write it somewhere. It is an indication that we can safely resume the read stream process with the help of the `.resume()` method of the readable stream. 

---

## Lecture 9, 10 - 

### How to close or end a writable stream - 

It is crucial to end a writable stream after the creation of a writable stream. To end a writable stream we can use the `writable.end` method to end writeable stream. 

We can validate if the writable stream is ended or not using the events on a writable stream such as - `writable.on('finish')` &
`writable.on('close')`. 

--- 

### Writable Stream States in Node.js

#### 1. Writable (Initial) State

The default state where the stream is ready to accept data.

- **Check**: Use the `writable.writable` property.
  ```js
  console.log(stream.writable); // true if writable, false if not
  ```

#### 2. Corked State

In this state, the stream buffers all written data until it is explicitly uncorked.

- **Check**: Use the `writableCorked` property.
  ```js
  console.log(stream.writableCorked); // 0 means not corked, > 0 means corked
  ```

#### 3. Ended State

This state occurs when the `end()` method is called and the stream has been signaled to end, meaning no further writes can be made, but it doesn't guarantee that all data has been flushed yet.

- **Check**: `writable.writableEnded`

#### 4. Finished State

This state occurs when the `end()` method is called and all data has been flushed to the destination.

- **Check**: `writable.writableFinished`

---

## Lecture 11, 12 - `.pipe()` & `.unpipe()` methods of readable stream

- ### `.pipe` method -   
The `readable.pipe()` method connects a readable stream with a writable stream to handle the data reading and writing operation. It is the most common way to handle data streams because it natively handles **backpressure**. It prevents the data allocation in memory where a readable stream reads faster than a writable stream can write. 

- ### `.unpipe` method - 
Readable `unpipe` method is just the opposite of the `pipe` method. While the `pipe` method connects a readable stream with a writable stream, the `unpipe` method disconnects a writable stream from a readable stream Where both were previously connected with the help of the `pipe` method.

- ### `pipeline` function by 'streams' module for error handling -
Pipeline is a built-in utility provided by the stream module of Node.js. It's a standard way to handle large datasets. It's a recommended practice to use `pipeline` functions instead of `pipe` or `unpipe` methods because `pipe` methods come with a huge drawback. **They don't handle the errors** if readable or writable streams occurs an error midway.  
The `pipeline` function handles the error natively. It immediately destroys the previously used streams, clears the internal buffers, and prevents memory leaks or other errors during production. 

---

## Lecture 13, 14 - Transform, Duplex & Passthrough streams

### Duplex streams - 
Duplex stream in Node.js is a stream which can implement functionalities of both readable stream and a writable stream. It can handle the read and write flow of a stream because internally they share the same object wrapper. 

### Transform streams - 
Transform streams are the streams which can directly perform computing or transforming operations on the input data.  

### Passthrough streams - 
Pass-through stream is a trivial implementation of a transform stream.

---

### Learned about -

- **The Duplex streams of a process object**
- **What are `stdin` stream, `stdout` stream, and `stderr` stream of a process object?**
- **How to share data between input/output/err streams of a process object using the `child_process` module and the `spawn` method of the `child_process` module** 

---

## Lecture 15 - Piping and redirection of streams using bash (WSL) terminal

- ### Piping of streams - 
We can pipe `stdin`/`stdout` streams of the process object in the terminal using the pipe symbol **"|"** on keyboard.  
It basically means we can connect the `stdin` and `stdout` streams of 2 different **process objects** with the help of the pipe symbol using the Bash terminal in Linux. 

Example - 
```
bash

echo "hello world" | node another-file.js 
// The output of the `echo` command Is now connected
 with stdin stream of another-file.js's process object.

```

```javascript
another-file.js

process.stdin.on('data', (chunk) => {
    console.log(chunk);
}) 
// Extracting the output from the `stdin` duplex stream of the process object 
```

---

- ### Redirection of streams in files -

Redirection of streams in files is the process of reading the data of a file using a duplex stream, like a process object's `stdin` stream or `stdout` stream and We can connect those streams with the help of `<` symbol.

Example - 
```
bash

node another-file.js < output.txt
// content inside the output.txt file has been read in the form of a  stream and that stream is connected with another-file.js's stdin stream. 

```

---

## Lecture 16, 17, 18 - 

- ### Why Streams are so fast? :-
When we read or write data using streams, such as **readable streams** or **writable streams**, these streams are drastically faster than the ordinary read/write methods provided by the FS module, such as `writeFile`, `writeFileSync`, `readFile`, and `readFileSync`. 

**When we read or write massive files using the `writeFileSync` or `readFileSync` methods**, they completely block Node.js V8 engine's event loop because they are blocking, synchronous code.

When we perform heavy operations such as file reading or file writing using this synchronous methods, internally those methods are opening and closing that file simultaneously using the File descriptor (`fd`). They are writing or reading that file directly from the disk, which makes the overall operation so expensive and time-consuming. 

If we try to read or write a file in a loop which will run thousands or lakhs of iterations, it means we are making thousands or lakhs of system calls to open or close a single file. That context switches between the Node.js This thing unknowingly backfires on our execution time and performance. 

**When we try to read or write files using a writable or readable stream,** they accept data in chunks and they immediately load that data into an internal buffer. The buffers, under the hood, use memory (RAM) instead of disk, which is extremely fast. They use Node.js internal thread pool, They handle backpressure smartly and utilizes the asynchronous I/O operations effectively, which lets the other processes or networking requests run simultaneously without any delay. This makes the process much faster than the ordinary synchronous methods.

---

- ### `fd` (File descriptor) :- 

In Node.js a file descriptor, abbreviated as `fd`, is a non-negative integer assigned by the operating system to a file or I/O stream to track its open or closed status. 

Instead of assigning a massive status object, hard-coded with the file path, directly into the memory or disk, the operating system uses a lightweight metric token to track the open and close status of a file or a stream. 

Every process object ran, through Node.js has three data streams: `stdin`, `stdout`, and `stderr`. By default, the numbers 0, 1, and 2 are assigned to those three streams as file descriptors to define that these I/O streams are opened with its concurrent process. 

---

## Lecture No 19, 20, 21 -

- ### reading files with file descriptor - 

we can read a file and its content with the help of file descriptor, using a method called `fs.read()` by `fs` module. the read method accepts the file descriptor as first argument and returns the reded data in the call back, in the form of - `callBack(err, bytesRead, buffer)`

syntax - 
```javascript
const fd = fs.open('file.path'); // file descriptor

fs.read(fd, (err, bytesRead, buffer) => {
    console.log(err) // null
    console.log(bytesRead) // length of read data in bytes 
    console.log(buffer) // read content buffer
})
```

- ### writing files with file descriptor -

for writing files using file descriptor and using the method `fs.writeSync` or `fs.write`, we need to make sure that the file is opened in **write mode**.

---

#### How to open files in write or different modes? - 

we can open files in write or different modes using **flags** accepted by the `fs.open()` method as second argument. - 

```
fs.open(fd, flag) // such as "w", "r" or "a"
```
---

#### Most common flags for opening a file in different modes -
- **"w" flag** - for opening a file in write only mode 
- **"r" flag** - for opening a file in read only mode 
- **"a" flag** - for opening a file in append mode 

---

- ### writing files with `fs.Write` method -

`fs.write()` method is pretty similar to `fs.read()` method. the write method accepts the file descriptor as first argument, then it accepts the data to write in destination file as second argument and returns the written data in the call back, in the form of - `callBack(err, bytesWritten, writtenData)`

syntax - 
```javascript
const fd = fs.open('file.path', "w"); // file opened in write mode

const data = "abcString"

fs.write(fd, data, (err, bytesWritten, writtenData) => {
    console.log(err) // null
    console.log(bytesWritten) // length of read data in bytes 
    console.log(writtenData) // read content buffer
})
```

---