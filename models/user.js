const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    profile: Image, 
    reviews: []
})

const User = mongoose.model('User', userSchema)

module.exports = User


