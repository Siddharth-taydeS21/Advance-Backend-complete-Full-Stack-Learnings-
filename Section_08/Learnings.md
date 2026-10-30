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