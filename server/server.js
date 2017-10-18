var express     = require('express');
var app         = express();

// Require database and all necessary routers
var db          = require('./db.js');
var userRouter  = require('./src/routes/userRouter');
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
app.use('/template', templateRouter);

// Start the server
app.listen(port);
console.log(">> Magic happens on port " + port);
