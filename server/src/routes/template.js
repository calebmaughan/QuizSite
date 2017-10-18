// This is a template for our API routes
// Things to remember: require necessary models, proper error handling, etc...

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

////////////////////////////////////////////////////////////////////////////////
// This is where you put you routes
router.use(function(req, res, next) {
  console.log(">> You have traveled so far...");
  next();
});
////////////////////////////////////////////////////////////////////////////////

module.exports = router;
