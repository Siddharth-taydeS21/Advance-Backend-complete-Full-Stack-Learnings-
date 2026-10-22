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
