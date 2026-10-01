const fs = require('fs');
const EnvironmentVariables = process.env;

const fileData = fs.readFileSync('./testEnvFile.txt').toString();
let newData;

// for handling auto CR, LF, CRLF cases 
if (fileData.includes('\r\n')) {
    newData = fileData.split('\r\n');
} else if (fileData.includes('\n')) {
    newData = fileData.split('\n');
}

newData.forEach(pair => {
    const [key, value] = pair.split('=');
    process.env[key] = value;
})

// setInterval call for keeping the process running so we can debug it in chrome dev tools 
// setInterval(() => {
//     const a = process.env;
//     console.log('done')
// }, 1000);