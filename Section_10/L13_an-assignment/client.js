const res = await fetch('http://127.0.0.1:4000/')

const decoder = new TextDecoder()
for await (const chunk of res.body){
    document.write(decoder.decode(chunk))
}