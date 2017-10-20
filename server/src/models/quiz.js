var mongoose    = require('mongoose');
var Schema = mongoose.Schema;
var QuizSchema = new Schema({
  questions: [{question:String}],
});

module.exports = mongoose.model('Quiz', QuizSchema);
