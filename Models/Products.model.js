const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})

const products = mongoose.model('products', productSchema)
module.exports = products