import fs from "node:fs";

try {
    const a = fs.readFileSync('./index.html', '');
    console.log(a.toString())
} catch (error) {
    console.log(error);
}