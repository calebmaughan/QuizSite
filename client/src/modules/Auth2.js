class Auth2{
  static setquizID(id){
    localStorage.setItem('quizID', id);
  }

  static getquizID(){
    return localStorage.getItem('quizID');
  }

  static removeQuizId() {
    localStorage.removeItem('quizID');
  }

  static getQuizQuestion(){
    return localStorage.getItem('question');
  }
  static setQuizQuestion(q){
    localStorage.setItem('question', q)
  }

}
export default Auth2;
