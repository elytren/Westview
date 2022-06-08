const mongoose = require('mongoose')


const prodSchema = new mongoose.Schema({
    name: String, 
    details: String,
    price: Number, 
    img: String,
    qty: Number, 
    reviews: []
})

const Prod = mongoose.model("Prod", prodSchema)

module.exports = Prod 