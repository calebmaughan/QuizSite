var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// Import user models
var Quiz        = require('./../models/quiz.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create an instance of Router
var router = express.Router();

// This runs at all '/users' calls
router.use(function(req, res, next) {
  console.log(">> You be doin' stuff to the quizzes");
  next();
});

////////////////////////////////////////////////////////////////////////////////
router.route('/')
.post(function(req, res) {

  var quiz = new Quiz();
  quiz.questions=req.body.questions;
  quiz.quizLogin = req.body.quizLogin;


  user.save(function(err) {
    if (err)
      res.send(err);
    console.log('>> A quiz was created');
    res.json({message: '>> A quiz was created'});
  });
})
.get(function(req, res) {
  Quiz.find(function(err, users) {
    if (err)
      res.send(err)
    console.log('>> Retrieved all quizzes');
    res.json(quizzes);
  });
});
router.route('/:quiz_id')

  // Get by quiz_id
  .get(function(req, res) {
    Quiz.findById(req.params.quiz_id, function(err, quiz) {
      if (err)
        res.send(err)
      res.json(quiz)
    });
  })
  .put(function(req, res) {
    Quiz.findById(req.params.quiz_id, function(err, quiz) {
      if (err)
        res.send(err)

      quiz.questions = req.body.questions;
      console.log(req.body.questions);
      quiz.quizLogin = req.body.quizLogin;

      quiz.save(function(err) {
        if (err)
          send(err);
        console.log(">> Quiz " + req.params.quiz_id + " was updated");
        res.json({ message: ">> Quiz " + req.params.quiz_id + " was updated"});
      });
    });
  })
  .delete(function(req, res) {
    Quiz.remove({
      _id: req.params.quiz_id
    }, function(err, quiz) {
      if (err)
        res.send(err);
      console.log(">> Quiz " + req.params.quiz_id + " was deleted");
      res.json({ message: ">> Quiz " + req.params.quiz_id + " was deleted"});
    });
  });
  ////////////////////////////////////////////////////////////////////////////////

  // This must be included or you can't require in server.js
  module.exports = router;
