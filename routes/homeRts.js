const express = require('express');
const router = express.Router();

const homeCtrl = require('../controllers/homeCtrl')

router.get('/', homeCtrl.index)

router.get('/about', homeCtrl.showA)

router.get('/:decadeId', homeCtrl.show)


module.exports = router 