var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
// Import user models
var Quiz        = require('./../models/quiz.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Create an instance of Router
var router = express.Router();
// This runs at all '/quiz' calls
router.use(function(req, res, next) {
  console.log(">> You be doin' stuff to the quizzes");
  next();
});
//validates that the form has a question and 4 answers to the question
function validateMakeQuizForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';
  if (!payload || typeof payload.question !== 'string' || !payload.name.trim().length === 0) {
    isFormValid = false;
    errors.question = 'Please correct the question.';
  }

  if (!payload || typeof payload.answer1 !== 'string' || !payload.answer1.trim().length === 0) {
    isFormValid = false;
    errors.answer1 = 'Please provide a correct answer for answer 1.';
  }

  if (!payload || typeof payload.answer2 !== 'string' || !payload.answer2.trim().length === 0) {
    isFormValid = false;
    errors.answer2 = 'Please provide a correct answer for answer 2.';
  }
  if (!payload || typeof payload.answer3 !== 'string' || !payload.answer3.trim().length === 0) {
    isFormValid = false;
    errors.answer3 = 'Please provide a correct answer for answer 3.';
  }
  if (!payload || typeof payload.answer4 !== 'string' || !payload.answer4.trim().length === 0) {
    isFormValid = false;
    errors.answer4 = 'Please provide a correct answer for answer 4.';
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
////////////////////////////////////////////////////////////////////////////////
router.route('/')
// makes an empty quiz with default values
//returns the quiz id.
  .post(function(req, res) {
      quizAccessID=quiz.ObjectId.substr(quiz.ObjectId.length - 5);
      quiz.save(function(err) {
        if (err)
          send(err);
        console.log(">> Quiz " + req.params.quiz_id + " was updated");
        res.json({ message: ">> Quiz " + req.params.quiz_id + " was updated"});
      });
    });
router.route('/:quiz_id')
  // Get by quiz_id
  //returns the quiz
  .get(function(req, res) {
    Quiz.findById(req.params.quiz_id, function(err, quiz) {
      if (err){
        //console.log("this is a test");
        res.send(999)
        }
      res.json(quiz)

    });
  })
//Check
//put some new answers and questions into a quiz after it validates the form
  .put(function(req, res) {
    var validationResult = validateMakeQuizForm(req.body);
      Quiz.findById(req.params.quiz_id, function(err, quiz) {
        if (err)
          res.send(err)
          var validationResult = validateMakeQuizForm(req.body);
          if (!validationResult.success) {
            return res.status(400).json({
              success:  false,
              message:  validationResult.message,
              errors:   validationResult.errors
            });
            quiz.questions.push(req.body.questions);
            quiz.answers.push([req.body.answer1,req.body.answer2,req.body.answer3,req.body.answer4]);
            quiz.maxSize+=1;
            quiz.save(function(err) {
            if (err)
            send(err);
              console.log(">> Quiz " + req.params.quiz_id + " was updated");
              res.json({ message: ">> Quiz " + req.params.quiz_id + " was updated"});
            });
      }
    });
  })
//deletes a quiz by ID
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
