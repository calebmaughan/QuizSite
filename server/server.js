var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

var mongoose    = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds117485.mlab.com:17485/live-polling-test');

// Configures bodyParser(), it helps us with POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;    // Set the port

// Routes for the API
var router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'Yay, it worked!'});
});

// All paths are prefixed with '/api'
app.use('/api', router);

// Start the server
app.listen(port);
console.log("Magic happens on port " + port);
