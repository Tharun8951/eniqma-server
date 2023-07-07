const products = require('../Models/Products.model')
const categories = require('../Models/Category.model')

const getAllProducts = async (req,res) => {
    const data = await products.find()
    res.json({
        data: data
    })
}

const getAllCategories = async (req,res) => {
    const data = await categories.find()
    res.json({
        data: data
    })
}

module.exports = {getAllProducts, getAllCategories}