const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')

const app = express()
const port = 3001

mongoose.connect('mongodb://localhost/shopping-cart')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/api/products', productRoutes)

const server = app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = server
