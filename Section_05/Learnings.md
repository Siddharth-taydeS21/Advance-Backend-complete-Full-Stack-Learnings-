## Lecture No 1 to 6 : Number Systems - 
#### Decimal Number system (Base 10)

The decimal number system is the number system which we use in our daily life. With the help of the decimal number system, the maximum digit we can represent is 9. Every number position represents power of ten. For ex. (2^0, 2^1, 2^3...)  

- Usage in programming  :

The decimal number system as the universal standard. The decimal number system is normally used to assign numbers to variables or number variable data in day-to-day coding. Every application across the world uses the decimal number system to display the respective data on their UI interfaces. 

---

#### Octal Number system (Base 8)

The octal number system is one of the number systems which a computer uses in its low-level work. In the octal number system the maximum digit we can represent is 7. It includes symbols from 0 to 7. Every octal number and its position represents the power of 8. for ex. (8^1, 8^2, 8^3...).

- Usage in programming  : 

It is primarily used for low-level binary representation and is famously used to set the file permissions in Unix/Linux and Linux-like environments. 

---

#### HexaDecimal Number system (Base 16)

The hexadecimal number system is another most important number system which the computer uses very heavily. In the hexadecimal number system there are symbols from 0 to 9 and it also has A to F to represent some numbers. Every number position represents the power of 16. for ex. (16^0, 16^1, 16^3, ... ) 

- Usage in programming  : 

Computers use the hexadecimal number system to represent complex binary bits and bytes in just one to two characters. It is heavily used to display/translate the hex color codes and other low-level binary computing in computers. 

---

#### Binary Number system (Base 2) 

Binary Number system is the fundamental standard for computers, their low level data storing and transfer works. Everything in the computer is just 0 and 1 at the very physical level.

The binary Number System has only 2 symbols 0 and 1. Every number position represents the power of 2 for ex. (2^0, 2^1, 2^2, ... ). 

Usage in programming : 

it the fundamental language fro computer hardwares. hardwares can hold, store and send electrical charges and signals as 0s and 1s to store, process and send data, and to read and execute code in the sequence of 0s and 1s.  

---


## Lecture No 7 : Digital data units

computer can store data in the hardwares by using the hardware's billions of transistors (the bits). the transistors can hold the electrical charges to represent 0s and 1s. 

to map the size of stored data we have "Digital data units". 
such as - 

- ***a bit*** - one individual bit in billions of bits in hardware components (such as memory, RAM, SSD)
- ***a nibble*** - a group of 4 bits
- ***a byte*** - a group of 8 bits

---
- **KB/Kilobytes** - 1,000 bytes
- **MB/Megabytes** - 1,000 Kilobytes
- **GB/Gigabytes** - 1,000 Megabytes
- **TB/Terabytes** - 1,000 Gigabytes
- **PB/Petabytes** - 1,000 Terabytes
- **ZB/Zetabytes** - 1,000 Petabytes
- **EB/Exabytes** - 1,000 Zetabytes
- **YB/Yottabytes** - 1,000 Exabytes

---

## Lecture No 8 : 
### low level Binary data storing and data transfer mechanism -  

### Data storage and Binary foundation -

**Bits :** a bit is a smallest unit of data. it can hold electrical charges which represents 0s (off/empty/no), and 1s (on). 

**Bytes :** a byte is a group of 8 bits which is enough to store a Character in the form of binary number such as "A" of "5" and all others. 

**storing Text :** Text is stored as bytes in memory as hex codes using the standard unicode formats (such as ASCII & Unicode)

**storing Images :** Images got broken into grid of small dots called pixel. each pixel holds the color and brightness contrast in to form of the numbers. hexadecimal number system is used to convert this color codes in to numbers. 
finally it get stored in the memory as binary numbers sequence of 0s and 1s.

**storing Audio and Video :** they get captured as waves, sampled thousands of times per second and letter on they get stored in the memory as binary numbers sequence of 0s and 1s.

### Data transfer mechanism -

**Binary Conversion :**    
computers and phones stores data such as text, Images, Videos and Audios in memory in the from binary numbers sequence of 0s and 1s. 

**Data Carrier waves :**   
Networking devices such as wifi routers generates steady, **electromagnetic radio waves** called Carrier waves. this waves operates on the standard frequencies like 2.4 GHz, 5 GHz and 6 GHz. 

**Modulation :** To hide binary data inside the Carrier waves, Networking device Transmitters change the **amplitude** (height), **frequencies** (speed), **phase** (timing). this process call Modulation of radio waves.

**Transmission (Data sending) :**    
the Transmitters sends this data through out the world as electromagnetic radio waves in the air.

**Physical Movement :**   
The invisible electromagnetic radio waves can travel outward nearly at the speed of light. it can pass through free space and barriers such as walls and furniture. 

**Addressing :**
The data inside the radio waves is sent in small packets and each packets contains a **MAC Address**, so that only the intended recipient device can receive and accept and process it while other devices ignore it.

**Reception (Data receiving):**    
The Networking device Transmitters can also receive the data as radio waves to read or process them.

**Demodulation / Decoding the Data :**
Networking device has the components which can analyze the change in the radio waves such as  **amplitude** (height), **frequencies** (speed), **phase** (timing) to Decode the binary data inside the radio waves. 

finally, the received and Decoded data can be used for further operations. 

---

## Lecture No 9, 10 :
### Character sets - 
Character sets are the universal inventories which assign the unique hex value to different and all type of letters and Characters in the whole word. computers used Character encoding algorithms to convert the hex value assigned to the letters and Characters, in to binaries to store them in memory. 
examples of Character sets includes - **ASCII, Unicode**.

---

### Character encoding - 

Character encoding is the data transformation algorithms which tell the computer, that how it can convert a letter, symbol, Character in to data byte such as hex number or binary number. Character encoding algorithms read the data bytes stored in computer memory and helps the computer to display the corresponding letters, symbols, Characters or data on screen.

---

## Lecture No 11, 12 : 
### Intro to Unicode, Unicode planes and UTF - 

- #### Unicode :     
Unicode is a universal character encoding standard that assigns a unique hex value called **code point** to every possible character, letter, symbol, emoji, Character systems, scripts in our whole world. 
The computer uses these hex code values of each character to convert them into binary zeros and ones and then it stores it in memory as bits and bytes. 

- #### Unicode planes : 
The entire Unicode codespace contains **1,114,112** code points for every character, symbol, emoji, or language in our whole world. To keep them organized they are categorized them into 17 equal parts and they are known as planes while each plane, or each category, contains **65,536** (2^16) code points.  

- #### UTF : 
UTF stands for **Unicode Transformation Format**. It is a character encoding algorithm which computers use to translate the characters into bytes or binary data, such as zeros and ones. The Unicode character set defines which hex value belongs to which character, while the UTF decides how a character or symbol should be translated to store in computer memories for storage or transmission. 

---

## Lecture No 13 : 
### UTF-8 vs UTF-16 vs UTF-3 

The primary difference between these three is code unit size, variable vs fixed width, and space efficiency while turning a Unicode code point into binary data.  

- **UTF-8**

  UTF-8 is an encoding algorithm which uses 8 bits to store the sequence of 0s and 1s in computer memories. It can use 1, 2, 3, or 4 bytes to To store a Unicode code point into binary data inside the computer memory. The UTF-8 algorithm is compatible with the ASCII character set. It is primarily used in web APIs, internet, JSON or XML, Linux or Unix, and databases. 

- **UTF-16**

  UTF-16 encoding algorithm uses 2 bits by default and a maximum of 4 bits to store or convert a Unicode code point into binary data for storing it inside the memory. It's not compatible with the ASCII character set. It is primarily used in Windows APIs, Java, JavaScript, and .NET strings. 

- **UTF-32**

  UTF-32 is another character encoding algorithm which has a fixed width of 4 bytes. It means it will use 4 bytes by default to store a character in binaries inside computer memory. Its primary use is network/internet sharing and low-level system APIs.  

---


## Lecture No 14 : Byte Order Mark (BOM) and Endianness

## BOM (Byte Order Mark)
The **Byte Order Mark (BOM)** is a **Unicode character** (U+FEFF) used at the beginning of a text file or data stream to indicate the encoding and the **endianness** (byte order) of the file. It plays an essential role in helping systems correctly interpret the text encoding, especially in encodings like **UTF-16** and **UTF-32**.

### Key Points About BOM:
- **Unicode Character**: BOM is encoded as the Unicode character **U+FEFF**. While it is a real Unicode character, it is not intended to appear in the visible text of the file.
- **Purpose**: Its main function is to signal the encoding of the text and, in the case of multi-byte encodings like UTF-16 and UTF-32, to specify the **byte order** (endianness).
- **UTF-8**: In UTF-8, the BOM is optional and is not strictly needed because UTF-8 is byte-oriented and does not have endianness issues. However, when present, the BOM in UTF-8 is represented by the byte sequence **`EF BB BF`**.

### BOM in Different Encodings:
- **UTF-16LE (Little Endian)**: The BOM is `FF FE`.
- **UTF-16BE (Big Endian)**: The BOM is `FE FF`.
- **UTF-32LE (Little Endian)**: The BOM is `FF FE 00 00`.
- **UTF-32BE (Big Endian)**: The BOM is `00 00 FE FF`.

---

## Endianness

**Endianness** refers to the order in which bytes are stored in memory or transmitted in a data stream. It is important in multi-byte encodings like **UTF-16** and **UTF-32**, where characters are represented by two or more bytes. The order in which these bytes are arranged determines how a system interprets the data.

There are two types of endianness:

### 1. Little Endian:
- In **Little Endian** systems, the **least significant byte (LSB)** is stored first (at the lowest memory address), and the **most significant byte (MSB)** is stored last.
- Example: For the hexadecimal number `0x12345678`, in little-endian format, it would be stored as `78 56 34 12`.

### Advantages of Little Endian:
- Easier for systems to perform operations on lower significant bytes first, which is useful in many low-level operations.
- Commonly used by modern hardware architectures like **Intel** and **AMD** processors.

### 2. Big Endian:
- In **Big Endian** systems, the **most significant byte (MSB)** is stored first (at the lowest memory address), and the **least significant byte (LSB)** is stored last.
- Example: For the hexadecimal number `0x12345678`, in big-endian format, it would be stored as `12 34 56 78`.

### Advantages of Big Endian:
- Easier for humans to read since the bytes are stored in the same order as the digits appear in a multi-byte value (e.g., a number written left to right).
- Commonly used in **network protocols** (often referred to as **network byte order**).

---

## How BOM and Endianness Work Together:
- In **UTF-16** and **UTF-32**, BOM is crucial because it indicates the **endianness** of the data.
  - For example, if a BOM of `FF FE` is detected, the system knows the data is in **little-endian** format.
  - If the BOM is `FE FF`, the system understands that the data is in **big-endian** format.

- In **UTF-8**, endianness doesn't apply because the encoding is byte-oriented, so the BOM is not strictly required. However, some applications may still include it (`EF BB BF`) as a signal that the file is UTF-8 encoded.

---

## Comparison Table

| Aspect        | Description                                                       | Usage/Encoding                                                 |
|---------------|-------------------------------------------------------------------|----------------------------------------------------------------|
| BOM (Byte Order Mark) | A Unicode character (U+FEFF) used to signal encoding and endianness.     | Present in UTF-8 (optional) and UTF-16/32 (required for endian detection). |
| Endianness            | Refers to the byte order in multi-byte encodings like UTF-16 and UTF-32. | Applicable to encodings like UTF-16/32 where byte order matters.           |
| Little Endian         | Least Significant Byte (LSB) stored first; used by Intel and AMD.        | Dominant in most modern hardware architectures.                            |
| Big Endian            | Most Significant Byte (MSB) stored first; used in network protocols.     | Used in network protocols and some older systems.                          |