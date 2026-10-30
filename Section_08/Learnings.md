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