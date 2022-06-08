const express = require('express');
const router = express.Router();

const prodCtrl = require('../controllers/productsCtrl')

router.get('/:decadeId/reviews/:productId', prodCtrl.show)


module.exports = router 