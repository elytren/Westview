const Dec = require('../models/decade')
const Product = require('../models/products')


const show = (req, res)=>{
    Dec.findById(req.params.productId).then(()=>{
        console.log(review)
        res.render('reviews', [{review}])
    }
)}



module.exports = {
    show
}