const express = require('express')
const { getAllProducts, getAllCategories } = require('../Controllers/Products.contoller')
const router = express.Router()

router.get('/', getAllProducts)
.get('/categories', getAllCategories)

module.exports = router