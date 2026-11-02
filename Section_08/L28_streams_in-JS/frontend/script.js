const decoder = new TextDecoder()

const response = await fetch('http://localhost:8000/');
// response.body is a readable stream 

// for await (const chunk of response.body) {
//     console.log(decoder.decode(chunk))
// }

const reader = response.body.getReader();
while(true){
    const {done, value} = await reader.read()
    if(done) break;
    // console.log(value)
    console.log(decoder.decode(value))
}