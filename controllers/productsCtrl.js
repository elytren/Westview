const Dec = require('../models/decade')



const show = (req, res)=>{
        Dec.findById(req.params.decadeId, (err, decade)=>{
            let product = decade.products.id(req.params.productId)
            res.render('reviews', {product})
        })
}



module.exports = {
    show
}