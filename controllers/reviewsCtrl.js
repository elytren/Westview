const Dec = require('../models/decade')


const show = (req, res)=>{
        Dec.findById(req.params.decadeId, (err, decade)=>{
            let product = decade.products.id(req.params.productId)
            res.render('reviews/showReview', {product, decade})
        })
}

const newReview = (req, res)=>{
    Dec.findById(req.params.decadeId, (err, decade)=>{
        let product = decade.products.id(req.params.productId)
        res.render('reviews/newReview', {product, decade})
    })
}

const createReview = (req, res)=>{
    Dec.findById(req.params.decadeId, (err, decade)=>{
        let product = decade.products.id(req.params.productId)
        product.reviews.push(req.body)
        decade.save(function(err){
            res.redirect(`/wv/${decade._id}/reviews/${product._id}`)
        })
    })
}

const deleteReview = (req, res)=>{
    Dec.findById(req.params.decadeId, (err, decade)=>{
        let product = decade.products.id(req.params.productId)
        let reviewObject = product.reviews.id(req.params.reviewId)
        reviewObject.remove()
        decade.save(function(err){
            res.redirect(`/wv/${decade._id}/reviews/${product._id}`)
        }) 
    })  
}

const editReview = (req, res)=>{
    


}

const updateReview = (req, res)=>{

}


module.exports = {
    show,
    newReview,
    createReview,
    deleteReview, 
    editReview, 
    updateReview
}