var mongoose    = require('mongoose');
var QuizSchema      = mongoose.model('Quiz').Schema;
var UserSchema = new Schema({
  name: String,
  password: String,
  quizID:QuizSchema.Types.ObjectID
});
module.exports = mongoose.model('QuizMaster', QuizMasterSchema);
