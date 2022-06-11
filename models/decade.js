const mongoose = require('mongoose')
const prodSchema = require('./products')
const reviewSchema = require('./reviews')

const decSchema = new mongoose.Schema({
    decade: String, 
    imagePath: String,
    products: [prodSchema]
})

const Dec = mongoose.model("Dec", decSchema)

module.exports = Dec 
