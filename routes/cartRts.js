const express = require('express');
const router = express.Router();

const cartCtrl = require('../controllers/cartCtrl');

router.get('/add-to-cart/:productId', cartCtrl.addToCart);



module.exports = router