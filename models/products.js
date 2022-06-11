const mongoose = require('mongoose')
const reviewSchema = require('../models/reviews')

const prodSchema = new mongoose.Schema({
    name: String, 
    details: String,
    price: Number, 
    imagePath: String,
    qty: Number, 
    reviews: [reviewSchema]
})

// const Product = mongoose.model("Product", prodSchema)

module.exports = prodSchema