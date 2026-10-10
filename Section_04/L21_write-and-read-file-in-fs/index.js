import { readFile, writeFile, appendFile } from "node:fs/promises";

// task 1 - reading a file from desktop folder and writing it inside our project folder

// this is how we can access the file and folders inside windows os -
// the desired file is located on Desktop on windows and the project folder is opened in wsl environment still we are able to access the C drive form here using the /mnt/c path

const contentBuffer = await readFile("/mnt/c/Users/admin/OneDrive/Desktop/textFile1.txt")
writeFile('myFile.txt', contentBuffer);
appendFile('./myFile.txt', '\nHello world, my name is siddharth...')


// task 2 - reading a jpg file form our project folder (in buffer format) and writing it in desktop folder
const imageFileBuffer = await readFile("./ghost_soldier.jpg");
// console.log(imageFileBuffer);
writeFile('/mnt/c/Users/admin/OneDrive/Desktop/new_ghost_soldier.jpg', imageFileBuffer);


// task no 3 create a CLI command named "copy" which accepts a file as first argument and and accepts a directory location as second argument and it stores the file at the location which we gave as argument. 