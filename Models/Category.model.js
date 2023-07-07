const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    CategoryName: String,
})

const Categories = new mongoose.model('Categories', categorySchema)
module.exports = Categories

