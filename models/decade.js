const mongoose = require('mongoose')

const prodSchema = new mongoose.Schema({
    name: String, 
    details: String,
    price: Number, 
    img: String,
    qty: Number, 
    reviews: []
})


const decSchema = new mongoose.Schema({
    decade: String, 
    products: [prodSchema]
})

const Dec = mongoose.model("Dec", decSchema)


module.exports = Dec