const mongoose = require('mongoose')
const prodSchema = require('./products')


const decSchema = new mongoose.Schema({
    decade: String, 
    img: String,
    audio: String,
    products: [prodSchema]
})

const Dec = mongoose.model("Dec", decSchema)

module.exports = Dec 
