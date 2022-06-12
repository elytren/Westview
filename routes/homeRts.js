const express = require('express');
const router = express.Router();
const passport = require('passport')

const homeCtrl = require('../controllers/homeCtrl')

router.get('/', homeCtrl.index)

router.get('/:decadeId', homeCtrl.show)

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect : 'javascript:history.back()',
        failureRedirect: 'javascript:history.back()'
    }
));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/wv')
});



module.exports = router 