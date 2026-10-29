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
