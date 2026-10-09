import fs from "node:fs/promises";

const addEntries = async (filePath, arg) => {
    const wordEntries = {};
    const fileData = await fs.readFile(filePath, 'utf-8')
    const dataArray = fileData.split(/[^a-zA-Z0-9]+/).filter(word => word);

    dataArray.forEach((word) => {
        if (Object.hasOwn(wordEntries, word)) wordEntries[word]++;
        else wordEntries[word] = 1;
    })

    if(arg){
        if(!wordEntries[arg])console.log(`0 results! The word ${arg} is not present in the file..`);
        else console.log(`Word : ${arg}, Repetitions : ${wordEntries[arg]}`)
    }else{
        console.log(wordEntries)
    }
}

const [nodeProcess, Command, FilePath, arg] = process.argv;
// console.log(process.argv)

if(!arg && Command === 'any') {
    // console.log(`someone is trying to execute this file: ${arg} using ou custom command`);
    await addEntries(FilePath);
}else if(arg && Command === 'any'){
    await addEntries(FilePath, arg);
}