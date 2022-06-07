const express = require('express');
const router = express.Router();

const startCtrl = require('../controllers/starterCtrl')

router.get('/', startCtrl.main)

router.get('/:decadeId', startCtrl.show)









module.exports = router 