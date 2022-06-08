const Dec = require('../models/decade')


const show = (req, res)=>{
    // Dec.findById(req.params.productId).then((product)=>{
    //     console.log(product)
        res.render('reviews')
    // })
}



module.exports = {
    show
}