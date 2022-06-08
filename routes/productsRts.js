const express = require('express');
const router = express.Router();

const prodCtrl = require('../controllers/productsCtrl')

router.get('/:productId/reviews', prodCtrl.show)


module.exports = router 