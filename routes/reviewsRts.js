const express = require('express');
const router = express.Router();

const reviewCtrl = require('../controllers/reviewsCtrl')

router.get('/:decadeId/reviews/:productId', reviewCtrl.show)

router.get('/:decadeId/reviews/:productId/new', reviewCtrl.newReview)

router.post('/:decadeId/reviews/:productId', reviewCtrl.createReview)

module.exports = router 