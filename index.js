const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://appledaeun:ekdmsdl1@boilerplate.brpk3xx.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnitfiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongodb connected ... '))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))