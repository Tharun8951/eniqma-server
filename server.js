const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(express.json())

app.use(cors())

const mongoDB = require('./db')
const productsHandler = require('./Routers/Products.router')
mongoDB()

app.get('/', async (req,res)=>{
    res.json({
        msg: 'Hello world',
    })
})

app.use('/products', productsHandler)

app.listen(4000, ()=>{
    console.log(`server started at port 4000`)
})
// app.listen(process.env.PORT, ()=>{
//     console.log(`server started at port ${process.env.PORT}`)
// })