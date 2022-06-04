const mongoose = require('mongoose')

const prodSchema = new mongoose.Schema({
    name: String, 
    details: String,
    price: Number, 
    reviews: [reference reviews here]
})


const decSchema = new mongoose.Schema({
    year: Number, 
    products: [prodSchema]
})