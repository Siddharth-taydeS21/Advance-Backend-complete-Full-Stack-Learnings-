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
console.log(view.getInt8(0)) // 50

// getUint8 reads the binary value as positive value 
console.log(view.getInt8(1)) // 19