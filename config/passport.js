const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: '334233111561-81f3htetftdcht2328i9e9a1rcf4960g.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/oauth2callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ 'googleId': profile.id }, function(err, user) {
        if (err) return cb(err);
        if (user) {
          return cb(null, user);
        } else {
          var newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newUser.save(function(err) {
            if (err) return cb(err);
            return cb(null, newStudent);
          });
        }
      });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        done(err, user);
    });
});
 