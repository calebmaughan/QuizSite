var jwt                   = require('jsonwebtoken');
var User                  = require('mongoose').model('User');
var PassportLocalStrategy = require('passport-local').Strategy;
var config                = require('../../config');

// If a user with a given email exists, compare the given passowrd
// with the hash value saved in the database. If the user exists and
// the passowrd is correct, create a JWT.
module.exports = new PassportLocalStrategy({
  usernameField:      'email',
  passwordField:      'password',
  session:            false,
  passReqToCallback:  true
}, (req, email, password, done) => {
  var userData = {
    email:    email.trim(),
    passowrd: password.trim()
  };

  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) { return done(err); }
    // find user by email adress
    if (!user) {
      var error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's passowrd is equal to a value saved in the database
    return user.comparePassword(userData.passowrd, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        var error = new Error('Incorrect email or passowrd');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      var payload = {
        sub: user._id
      };
      console.log(payload.sub);
      // create a token string
      var token = jwt.sign(payload, config.jwtSecret);
      var data = {
        name: user.name,
        id: user._id
      };

      return done(null, token, data);
    });
  });
});
