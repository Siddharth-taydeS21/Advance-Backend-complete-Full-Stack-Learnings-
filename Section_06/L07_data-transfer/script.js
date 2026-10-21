// const ProCodrrsArray = new Int8Array([0x50, 0x72, 0x6f, 0x43, 0x6f, 0x64, 0x72, 0x72]);

fetch('http://localhost:3000')
.then(res => res.arrayBuffer())
.then(data => console.log(data));