const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    content: String,
    rating: {
        type: Number, min: 1, max: 5
    }}, {
        timestamps: true
});

const prodSchema = new mongoose.Schema({
    name: String, 
    details: String,
    price: Number, 
    img: String,
    qty: Number, 
    reviews: [reviewSchema]
})


const decSchema = new mongoose.Schema({
    decade: String, 
    products: [prodSchema]
})

const Dec = mongoose.model("Dec", decSchema)

module.exports = {
    Dec
}