const express = require('express')
const app = express()
const route = require('./routes')
const port = 3000
const mongoose = require('mongoose')
const Book = require('./models/book')

mongoose.connect('mongodb://localhost:27017/library', {useNewUrlParser: true})
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', route)

app.listen(port, () => {console.log(`Listening on port ${port}!`)})