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
