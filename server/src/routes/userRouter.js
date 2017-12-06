var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

// Import user models
var User        = require('./../models/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create an instance of Router
var router = express.Router();

// This runs at all '/users' calls
router.use(function(req, res, next) {
  console.log(">> You be doin' stuff to users");
  next();
});

////////////////////////////////////////////////////////////////////////////////
router.route('/')

  // Makes a new user
  .post(function(req, res) {

    var user = new User();
    user.name = req.body.name;
    user.password = req.body.password;

    user.save(function(err) {
      if (err)
        res.send(err);
      console.log('>> A user was created');
      res.json({message: '>> A user was created'});
    });
  })

  // Gets and returns all users
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err)
      console.log('>> Retrieved all users');
      res.json(users);
    });
  });
////////////////////////////////////////////////////////////////////////////////

router.put('/:user_id/addQuiz', function(req, res) {
 User.findById(req.params.user_id, function(err, user) {
   if (err)
     res.send(err);

   // user.quizList.push(req.body.quiz_id);
   user.quizList.push({
     quizId: req.body.quiz_id,
     title: req.body.title
   })
   console.log("--------> " + req.body.title);
   console.log("--------> " + req.body.quiz_id);

   user.save(function(err) {
     if(err)
       send(err);
     console.log(">> User " + req.params.user_id + " added a new quiz " + req.quiz_id);
     res.json({message: ">> User " + req.params.user_id + "was updated"});
   });
 });
})

////////////////////////////////////////////////////////////////////////////////
// Performs actions based on user_id
router.route('/:user_id')

  // Get by user_id
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err)
      res.json(user)
    });
  })

  // Put (change user information) by user_id
  .put(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err)

      user.name = req.body.name;
      // user.password = req.body.password; // Need to setup hash

      user.save(function(err) {
        if (err)
          send(err);
        console.log(">> User " + req.params.user_id + " was updated");
        res.json({ message: ">> User " + req.params.user_id + " was updated"});
      });
    });
  })

  // Delete by user_id
  .delete(function(req, res) {
    User.remove({
      _id: req.params.user_id
    }, function(err, user) {
      if (err)
        res.send(err);
      console.log(">> User " + req.params.user_id + " was deleted");
      res.json({ message: ">> User " + req.params.user_id + " was deleted"});
    });
  });
////////////////////////////////////////////////////////////////////////////////

router.route('/:user_id/deleteQuiz/:quiz_id')
  .delete(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if(err)
        res.send(err);

      quizzes = user.quizList;
      quizzes.splice(quizzes.indexOf(req.params.quiz_id),1);
      console.log(quizzes.indexOf(req.params.quiz_id));
      console.log(quizzes + " <<");
      // quizzes.splice(quizzes.indexOf(req.params.user_id),1);

      user.save(function(err) {
        if(err)
          send(err)

        console.log(">> Quiz " + req.params.quiz_id + " was removed from user " + req.params.user_id);
      })

    })
  })

// This must be included or you can't require in server.js
module.exports = router;
