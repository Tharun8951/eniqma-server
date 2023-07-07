const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())

const mongoDB = require('./db')
const productsHandler = require('./Routers/Products.router')
mongoDB()

app.get('/', async (req,res)=>{
    res.json({
        msg: 'Hello world',
    })
})

app.use('/products', productsHandler)

app.listen(process.env.PORT, ()=>{
    console.log(`server started at port ${process.env.PORT}`)
})