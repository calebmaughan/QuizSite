var express     = require('express');
var app         = express();

// Require database and all necessary routers
var db          = require('./db.js');
var User = require('./src/models/user.js');
var Quiz = require('./src/models/quiz.js');
var userRouter  = require('./src/routes/userRouter');
var quizRouter  = require('./src/routes/quizRouter');
var templateRouter  = require('./src/routes/template');

// Set the port
var port = process.env.PORT || 3001;

// Keep this for now. It might help with debuging //
var router = express.Router();
router.use(function(req, res, next) {
  console.log('>> %s %s', req.method, req.path);
  next();
});
////////////////////////////////////////////////////

// ALL API ROUTERS GO HERE
app.use('/users', userRouter);
app.use('/quizzes', quizRouter);
app.use('/template', templateRouter);

//example use of saving a new quiz

// var awesomeQuiz = new Quiz({ questions:[{id:1 , question:"is this a question?"},{id:2 , question:"is this another question?"}] });
// // Save the new model instance, passing a callback
// awesomeQuiz.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });
// Start the server
app.listen(port);
console.log(">> Magic happens on port " + port);
