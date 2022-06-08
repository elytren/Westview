const mongoose = require('mongoose')


const prodSchema = new mongoose.Schema({
    name: String, 
    details: String,
    price: Number, 
    img: String,
    qty: Number, 
    reviews: []
})

const Product = mongoose.model("Product", prodSchema)

module.exports = Product 