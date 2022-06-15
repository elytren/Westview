const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect : '/wv',
        failureRedirect: '/wv'
    }
));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/wv')
});


module.exports = router