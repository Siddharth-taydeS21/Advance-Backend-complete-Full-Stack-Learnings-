import express from 'express';

const app = express();
const port = 4000;

app.use(express.static("test"));

app.get('/admin', (req, res) => {
    res.setHeader('Content-Type', 'application/pdf')
    res.end("{statusCode: 200, message: 'hello from server'}")
})

app.listen(port, () => {
    console.log(`App is running on Port ${port}`)
})