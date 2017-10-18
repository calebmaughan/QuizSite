var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

var User        = require('./src/models/user');

var mongoose    = require('mongoose');
mongoose.connect('mongodb://tpollick:apassword@ds117485.mlab.com:17485/live-polling-test');

// Configures bodyParser(), it helps us with POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;    // Set the port

// Routes for the API
var router = express.Router();

router.use(function(req, res, next) {
  console.log('>> %s %s', req.method, req.path);
  next();
});

router.get('/', function(req, res) {
  res.json({message: '>> Yay, it worked!'});
});

////////////////////////////////////////////////////////////////////////////////
// Performs actions on all users
router.route('/users')

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
      res.json(users);
    });
  });
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Performs actions based on user_id
router.route('/users/:user_id')

  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err)
      res.json(user)
    });
  })

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


// All paths are prefixed with '/api'
app.use('/api', router);

// Start the server
app.listen(port);
console.log(">> Magic happens on port " + port);
