var express   = require('express');
var validator = require('validator');
var passport  = require('passport');

const router = new express.Router();

// Validates the sign-up form
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// Validates the login form
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim() === 0) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}


router.post('/signup', (req, res, next) => {
  var validationResult = validateSignupForm(req.body);

  if (!validationResult.success) {
    return res.status(400).json({
      success:  false,
      message:  validationResult.message,
      errors:   validationResult.errors
    });
  }

  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name == 'MongoError' && err.code == 1100) {
        // 11000 is Mongo code for a duplicate email error
        return res.status(409).json({
          success:  false,
          message:  'Check the form for errors.',
          errors: {
            email: 'This email is already taken.'
          }
        });
      }

      return res.status(400).json({
        success:  false,
        message:  'Could not process the form.'
      });
    }

    return res.status(200).json({
      success:  true,
      message:  'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {

  var validationResult = validateLoginForm(req.body);
  if (!validationResult.sucess) {
    return res.status(400).json({
      sucess:   false,
      message:  validationResult.message,
      errors:   validationResult.errors
    });
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if(err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          sucess:   false,
          message:  "Invalid email or password."
        });
      }

      return res.status(400).json({
        sucess: false,
        message: 'Could not process the form.'
      });
    }

    return res.json({
      sucess:   true,
      message:  'You have sucessfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});

module.exports = router;
