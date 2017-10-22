var User                  = require('mongoose').model('User');
var PassportLocalStrategy = require('passport-local').Strategy;

// Return the Passport Local Strategy object
// Creates a new user document
module.exports = new PassportLocalStrategy({
  usernameField:      'email',
  passwordField:      'password',
  session:            false,
  passReqToCallback:  true
}, (req, email, password, done) => {
  var userData = {
    email:    email.trim(),
    password: password.trim(),
    name:     req.body.name.trim()
  };

  var newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
