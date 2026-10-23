## Lecture No 2, 3, 4, 5 - 

### Array Buffers -
ArrayBuffer in JavaScript is an object which is used to represent low-level and fixed-length raw binary data. It's a chunk of co memory allocated in the heap.  

We cannot directly update or modify the data inside buffers. We either need a view like a typed array or a data view to modify or rewrite the underlying bytes. 

---

### Signed and unsigned values -

Signed values and unsigned values are examples of how we can represent positive and negative numbers in binary format so we can easily store them inside computer memory as a sequence of zeros and ones. 

- **Signed values** : Signed values represent negative numbers in binary format and they always start with **1** and they grab their prticualr byte size. for example, 8-bit, 16-bit, and 32-bit. 

- **Unsigned values** : Unsigned values represent positive numbers in binary format and they always start with 0. They grab their particular byte size, for example, 8-bit, 16-bit, and 32-bit. 

---

### Uint8Array, Uint16Array, Uint32Array vs Int8Array, Int16Array, Int32Array 

The core difference between unsigned and signed values is that the unsigned values can only includes and only represents positive binary numbers.
The signed values can represent and store the both, positive and negative types of binary numbers. 

### Comparison Table for Uint and Int Arrays - 

|TypedArray |	Type |	Size per Element |	Minimum Value |	Maximum Value |
|--|--|--|--|--|
|Int8Array	|Signed Integer|	1 byte (8 bits)|	-128|	127|
 |Uint8Array |	Unsigned Integer |	1 byte (8 bits) |	0 |	255 |
 |Int16Array |	Signed Integer |	2 bytes (16 bits) |	-32,768 |	32,767 |
 |Uint16Array |	Unsigned Integer |	2 bytes (16 bits) |	0 |	65,535 |
 |Int32Array |	Signed Integer |	4 bytes (32 bits) |	-2,147,483,648 |	2,147,483,647 |
 |Uint32Array |	Unsigned Integer |	4 bytes (32 bits) |	0 |	4,294,967,295 |

---

## Lecture No 6 - 

### Typed Arrays 

- Types of Typed arrays - 

  - Int8Array
  - Int16Array
  - Int32Array
  - BigInt64Array

  - Uint8Array
  - Uint8ClampedArray
  - Uint16Array
  - Uint32Array
  - BigUint64Array

---

#### Learned about -
**byteLength** property of ArrayBuffers and TypedArrays and **resizable**, **detached** properties of ArrayBuffers, and **transfer()** method of ArrayBuffers. 

---

#### How is the byte length of TypedArrays calculated? - 

This is how the byte length of a typed array is calculated -

```
byteLength = length of TypedArray * Bytes_per_element
```
for example, 
If we have an `Int8array` with four elements in it, the byte length of that `Int8array` will be - 

length of TypedArray = 4;   
Bytes_per_element = 1;   
byteLength = 4 * 1 = 4;

for `Int16array` - 
length of TypedArray = 4;   
Bytes_per_element = 2;   
byteLength = 4 * 2 = 8;

for `Int32array` - 
length of TypedArray = 4;   
Bytes_per_element = 4;   
byteLength = 4 * 4 = 16;

---
- **transfer() method :** 
we can make a copy of an ArrayBuffer by using this - 

```
const a = new ArrayBuffer(4);
const newArrayBuffer = a.transfer();
```

This will make the `detached` property of the array buffer named `a` true; and it will copy all contents of the `a` ArrayBuffer to the `newArrayBuffer`. And this method also makes the array buffer empty.

---

## Lecture No 7 - 

### How to transfer memory data in array buffer format to the network? or from the memory to local disk? - 

- Created a small HTTP server using the HTTP module and sent data in ArrayBuffer format. 

- Created a front-end server to receive data from an HTTP server, which sends the data in ArrayBuffer-format.

---

## Lecture 8 - Buffer in Node.js

In Node.js, `Buffer` is a global object which is used to represent and manipulate the sequence fixed-length raw binary data 

---

Explored Methods - 

- **Buffer.alloc(length: number) :**  
it creates an Uint8Array like ArrayBuffer and add the 0s as numbers to full the length which we had passed as argument.

- **Buffer.from(array of numbers | arrayBuffer) :**
it creates an Uint8Array like ArrayBuffer form the array of number which we pass as argument or it can    

## Lecture 9 - Buffer.alloc() vs Buffer.allocUnsafe()

**Buffer.alloc() :**  
Buffer.alloc() is a safe standard for creating buffers in Node.js. the method allocate the memory space to the buffer and quickly initialize it by filling 0s in every byte. insuring that, no old, snsitive/harmful data in memory should not get exposed. 

**Buffer.allocUnsafe() :**  
Buffer.alloc() is a blazing fast method to creating a buffer. it just allocates the space in memory to the buffer and skips the o filling process which make it comparatively more faster than Buffer.alloc() method. it comes with a caution - the memory allocated to the buffer can have snsitive/harmful data, data from previously executed processes. 

its a recommended practice to fill the buffer immediately using the **Buffer.fill(0)** method to make sure there is no old leftover data in the buffer.

--- 

## Lecture 10 - Buffer pool in Buffers

when we make a Node.js Buffer using the method - .allocUnsafe();
like this - 
```
const NodeBuffer = Buffer.allocUnsafe(length);
```

it add a property to the Buffer named, `buffer`. we can access it like this - 
```
console.log(NodeBuffer.buffer) // ArrayBuffer(8192)
```

that buffer property on `NodeBuffer` buffer is called the **Buffer pool**. it has the fixed length of **8192 bytes.**

- Buffer pools of 2 different buffers share the same space in memory until the buffer is exhausted.   
- if the buffer pool of buffers gat exhausted then Node.js will create a new buffer pool for next buffer. 
```
const buffer1 = Buffer.allocUnsafe(4)
const buffer2 = Buffer.allocUnsafe(4)

// both buffer pools share tha same space in memory
console.log(buffer1.buffer === buffer2.buffer) // true
```
---

Explored Methods - 
- **Buffer.concat([buffer1, buffer2]) -**  
.concat() method joins 2 buffers and creates a new buffer.
```
const joinedBuffer = Buffer.concat([bufferA, bufferB]);
```
- **Buffer.allocUnsafeSlow(size) :** - 
The `Buffer.allocUnsafeSlow()` method returns a new buffer. It allocates the space in bytes to the buffer, which we can pass as an argument to the method. It allocates uninitialized memory to the buffer so it might contain old and sensitive data. It is recommended to immediately fill the buffer using the `buffer.fill(0)` method. 

- **constants property -**
The `constants` property is the property which is exported with the `buffer` module by Node.js and the JavaScript V8 engine. 
It includes two fields - 

**buffer.constants.MAX_STRING_LENGTH** :   
Buffers can be decoded into strings using `buffer.toString()` methods. This constant acts as an architectural limit for a file or payload. If the file size or payload size exceeds the limit, then Node.js will throw an invalid range error.   

**buffer.constants.MAX_LENGTH** :   
If we attempt to make a buffer with a larger size using `buffer.alloc` or `buffer.allocUnsafe` methods, it will give us **ERR_INVALID_ARG_VALUE** or **ERR_INVALID_OPT_VALUE** errors. 

---

## Lecture 11 - Buffer Methods

Core methods of Node.js Buffer when we create a buffer like this - 
```
const NodeBuffer = Buffer.from('Hello world');
```

- **Buffer.from():** - It receives text or a text file and it can create a Buffer using that text. It can also receive the character encoding as a second argument Which can be further used to decode that same text or file.

- **NodeBuffer.toString():** - 
It receives a text as the argument for Which character encoding algorithm should be used, and returns the decoded text If we have created a buffer using text.

- **NodeBuffer.write():** - 
We can give a string as an argument in this method and it will write the string to the existing buffer object. 

- **NodeBuffer.toJSON():** - It returns the JSON representation of the buffer, with a first key, which is `type`, and it has an assigned value of `buffer`. The next key will be `data` and it will be an array containing the buffer data. 

- **NodeBuffer(startIndex, endIndex):** - It crops an existing buffer and it returns it. 

- **NewBuffer.copy(existingBuffer, startIndex, endIndex):** - It copies the data from an existing buffer to another buffer instance. It will also accept the range starting from the start index and ending at the end index to copy a particular set of data from the existing index. 

- **NodeBuffer.includes():** - It checks whether the particular text or number, or any kind of data, is included in the existing number or not and it will return true or false. 

- **NodeBuffer.fill():** - It accepts strings or numbers as arguments and it will add that argument as every element in the buffer. 

- **NodeBuffer.join():** - It returns all elements in the buffer by joining them with the parameter, which we can send as an argument. 

---

## Lecture 12, 13 - 

### Practical uses and Limitations of buffers in Node.js - 

#### **Practical uses :** 

- When we use the file system module in Node.js to manipulate, read, or update any kind of file data or any type of files in our local system, fs module, behind the scenes, uses the buffers to make all the manipulations on the data. 

- When we create a backend server to receive the HTTP requests from the frontend server, any kind of request sent from the frontend server (and the data inside that request) will be received in buffer format on the backend server. 

- We can even send the data in the arrayBuffer or buffer format directly from our front-end server to the backend server. 

#### **Limitations of buffers :** 

Buffers use `ArrayBuffer` data types behind the scenes to do all their low-level work. and `ArrayBuffer` data type uses the memory of our RAM, which is directly associated with our system.

The limitation with buffers is that we can easily create small sizes of buffers. For example buffers with a size of 100 bytes or 1,000 or more bytes but It can become a problem when we need to work with very big sizes of buffers. For example buffers with a size of 2 GB, 5 GB, or 10 GB. 

It can consume almost 70% to 80% or 100% of our memory, which can obviously be harmful for other running processes in our system. It can introduce unnecessary system crashes, hangs, bugs, and lags. 

---

## Lecture No 14, 15 - Base64 and Base64 in Node.js

###  Base64 encoding

Base64 is a character encoding scheme which can convert raw binary data into ASCII strings. It uses 64 characters: `A-Z`, `a-z`, `0-9`, and `=` for padding. 

#### How it works - 
- For converting binary data to an ASCII string, The Base64 encoding requires a minimum data length of 24 bits(3 bytes).
- To convert binary data to string characters, Base64 encoding divides the bytes into equal groups of six bytes. 
- To convert the data into ASCII there is a rule in Base64 encoding which tells -   
**"the data should be in groups of 6 bits. 6 bits of data will make 1 byte (Because it's the standard of the 64 encoding) and the number of bytes should be a multiple of 3."**
- If the binary conversion of data is less than 24 bits, then the Base64 character encoding will add multiple zeros to fill the gap of bits. It will make the data full of 24 bits and then it will convert the binary data to an ASCII string. 

---
The browser provides us with two methods - **btoa() - Binary to ASCII and atob() - ASCII to binary**, to convert an ASCII string to a Base64 mapped string and a Base64 string to ASCII string. 

---

###  Base64 In Node.js  

Explored - 

- Converted raw files (such as text files, images, audio, video, and CSS files) into base64 character strings.

- Then converted those base64 strings into raw files in their previous raw form, using the base64 encoding and base64 URL encoding in Node.js

---