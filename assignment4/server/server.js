const express = require('express')
const app = express()
const cors = require('cors')
const jsonData = require(__dirname + "/products.json")

app.use(cors())

app.get('/text', (req, res) => {
    res.sendFile(__dirname + '/content.txt')
})

app.get('/json', (req, res) => {
    res.header("Content-Type", "application/json")
    res.json(jsonData)
})

app.listen(8080, (err) => {
    if(err) console.log("err");
    else console.log("listening -> 8080");
})
