var mongoose  = require('mongoose');
var config    = require('./config/index')

// The URI we will be connecting to. Change this as needed.


var dbURI = 'mongodb://cmaughan1582:password@ds125016.mlab.com:25016/practice'

//var dbURI = 'mongodb://tpollick:apassword@ds117485.mlab.com:17485/live-polling-test';

//var dbURI = 'mongodb://kbic17:apassword@ds227525.mlab.com:27525/trckblmp';


// Create the connection
mongoose.connect(dbURI);
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection fails
mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection disconnected');
});

// If the Node process exits, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected throught app termination');
    process.exit(0);
  });
});
