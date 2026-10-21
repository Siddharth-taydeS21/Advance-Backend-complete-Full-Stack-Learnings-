const int8Array = new Int8Array(4);
const int16Array = new Int16Array(4);

int8Array[0] = 0x1a;
int8Array[1] = 0x32;
int8Array[2] = 0xf;
int8Array[3] = 0x16;

int16Array[0] = 0x35c5;
int16Array[1] = 0x72a1;
console.log(int16Array);
