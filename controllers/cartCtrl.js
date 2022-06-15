//any models needed
const Cart = require('../models/cart');
const Dec = require('../models/decade');


const addToCart = (req, res)=>{
    const cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
    Dec.findById(req.params.decadeId, (err, decade)=>{
        let product = decade.product.id(req.params.productId)
        cart.add(product, product.id);
        req.session.cart = cart; 
        console.log(req.session.cart);
        res.redirect(`/wv/${decade._id}`);
    })
}


module.exports = {addToCart}
