var express     = require('express');
var bodyParser  = require('body-parser');
var passport    = require('passport');

// connect to the database
require('./db.js');
require('./src/models/user');

var app         = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

var localSignupStrategy = require('./src/passport/local-signup');
var localLoginStrategy  = require('./src/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

var authCheckMiddleware = require('./src/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// We need to exactly figure out what CORS does
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  next();
});

// Keep this for now. It might help with debuging //
// var router = express.Router();
// router.use(function(req, res, next) {
//   console.log('>> %s %s', req.method, req.path);
//   next();
// });
////////////////////////////////////////////////////

// ALL API ROUTERS GO HERE
var authRouter      = require('./src/routes/auth');
var apiRouter       = require('./src/routes/api');
// var userRouter      = require('./src/routes/userRouter');
// var templateRouter  = require('./src/routes/template');
app.use('/auth', authRouter);
app.use('/api', apiRouter);
// app.use('/users', userRouter);
// app.use('/template', templateRouter);

// Start the server
app.listen(3001, () => {
  console.log(">> Magic happens on port here!");
});
