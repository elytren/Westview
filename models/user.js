const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
    //timestamp 
    title: String,
    content: String,
    rating: Number
})


const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    profile: Image 
    reviews: []
})


