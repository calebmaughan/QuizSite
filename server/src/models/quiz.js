var mongoose    = require('mongoose');
var Schema = mongoose.Schema;
var QuizSchema = new Schema({
  //holds an array of questions
  questions: [],
  //holds an array of answers where indices of an array match a question
  answers: [[]],
  title: String,
  //tells us which question we are on
  onQuestion: {type:Number, default: 0},
  //tells us how big the quiz is
  maxSize: {type:Number, default: 0},
  answersClickNumber:[[Number]],
  isPublished: {type:Boolean, default: false},
  isTaken: {type:Boolean, default: false},
  quizAccessID: String

});

module.exports = mongoose.model('Quiz', QuizSchema);
