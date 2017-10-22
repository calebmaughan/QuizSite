var jwt     = require('jsonwebtoken');
var User    = require('mongoose').model('User');
var config  = require('../../config/index');

// Checks to make sure that the HTTP request is authorized and decodes
// the token for the user's id.
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get get token-value from request header
  var token = req.headers.authorization.split(' ')[1]

  // decode a token using a secret key-phrase in config. The obtain id
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) { return res.status(401).end(); }

    var userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }

      return next();
    });
  });
};
