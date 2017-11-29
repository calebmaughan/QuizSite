var express     = require('express');
var bodyParser  = require('body-parser');
var passport    = require('passport');
// connect to the database
require('./db.js');
require('./src/models/user');
require('./src/models/quiz');
var Quiz        = require('./src/models/quiz.js');
var app         = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

var localSignupStrategy = require('./src/passport/local-signup');
var localLoginStrategy  = require('./src/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// This is a user authentication step
var authCheckMiddleware = require('./src/middleware/auth-check');
app.use('/api', authCheckMiddleware);
app.use('/users', authCheckMiddleware);
//app.use('/quizzes', authCheckMiddleware);


// ALL API ROUTERS GO HERE
var authRouter      = require('./src/routes/auth');       // Used for login and signup
var apiRouter       = require('./src/routes/api');
var userRouter      = require('./src/routes/userRouter');
var quizRouter      = require('./src/routes/quizRouter');
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/users', userRouter);
app.use('/quizzes', quizRouter);

//example use of saving a new quiz
//var answers=[["maybe","yessir","probably","nada homey"]];
//var awesomeQuiz = new Quiz({questions:questionArray,answers:answers,quizAccessID: 12345});
 // Save the new model instance, passing a callback
//awesomeQuiz.save(function (err) {
//if (err) return handleError(err);
//   // saved!
//});
// Start the server
app.listen(3001, () => {
  console.log(">> Magic happens on port here!");
});
