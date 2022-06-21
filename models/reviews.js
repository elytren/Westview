const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: String, 
    content: String,
    rating: {
        type: Number, min: 1, max: 5
    }}, {
        timestamps: true
});


module.exports = reviewSchema