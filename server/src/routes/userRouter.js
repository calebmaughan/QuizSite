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
      user.password = req.body.password;

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

// This must be included or you can't require in server.js
module.exports = router;
