import express from 'express';

const app = express();
const port = 4000;
app.get(
    '/',
    (req, res, next) => {
        res.write('Message 1 from server..\n');
        console.log('Response 1')
        console.log(first)
        next()
    },
    (req, res, next) => {
        res.write('Message 2 from server..\n')
        console.log('Response 2')
        next()
    },
    (req, res, next) => {
        res.end('Message 3 from server..')
        console.log('Response 3')
    },
    (err, req, res, next) => {
        console.log('Something went wrong: Running error handler middleware')
        res.end('Something went wrong : Error')
    },
)

// app.get('/test', (req, res) => {
//     res.send('Hello from test route..')
// })

app.listen(port, () => {
    console.log(`App is running on Port ${port}`)
})