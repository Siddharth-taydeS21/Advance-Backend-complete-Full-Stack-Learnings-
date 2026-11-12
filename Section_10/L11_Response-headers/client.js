const res = await fetch('http://10.253.127.218:4000/')

res.headers.forEach((Key, value) => {
    console.log(`${value} - ${Key}`)
})