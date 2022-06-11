const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    content: String,
    rating: {
        type: Number, min: 1, max: 5
    }}, {
        timestamps: true
});

// const Review = mongoose.model("Rev", reviewSchema)

module.exports = reviewSchema