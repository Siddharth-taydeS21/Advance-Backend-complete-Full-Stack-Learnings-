const arrayBuffer = new ArrayBuffer(4);
const view = new DataView(arrayBuffer);

// this is how to set values (hex codes) in an arrayBuffer using the dataview
view.setInt8(0, 80)
view.setInt8(1, 274)
view.setInt8(2, 50)
view.setInt8(3, 74)

// this is how to retrieve the value form an arrayBuffer using the dataview
// console.log(view.getInt8(0))
// console.log(view.getInt8(1))
// console.log(view.getInt8(2))
// console.log(view.getInt8(3))

// getInt8 reads the binary value as positive value 
// console.log(view.getInt8(0)) // 50

// getUint8 reads the binary value as positive value 
// console.log(view.getInt8(1)) // 19

// ================= setInt16, setUint16 and getInt16, getUint16 ==================
// for storing a hex value which need more than i byte of space we need to use The setInt16, setUint16 methods of DataView Object

const NewArrayBuffer = new ArrayBuffer(8);
const newView = new DataView(NewArrayBuffer);

// it will grab 2 bytes of memory space to represent the number as hex and binary. 
// newView.setInt16(0, 256); 

// newView.setInt16(0, 256, true); 
// the third option it receives is the endianness (boolean flag for littleEndian, by default undefined/false), we can define weather it should be written as Little endian or big endian.


// ================= setInt32, setUint32 and getInt32, getUint32 ==================
newView.setInt32(0, 0x7346b412)
newView.setInt32(4, 0x7346b412, true)

console.log(newView.getInt32(0))
console.log(newView.getInt32(4, true))