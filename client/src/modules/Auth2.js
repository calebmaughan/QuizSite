class Auth2{
  static setquizID(id){
    localStorage.setItem('quizID', id);
  }

  static getquizID(){
    return localStorage.getItem('quizID');
  }

  static getQuizQuestion(){
    return localStorage.getItem('question');
  }
  static setQuizQuestion(q){
    localStorage.setItem('question', q)
  }

  static setRunning(x){
    localStorage.setItem('running', x)
  }
  static getRunning(){
    return localStorage.getItem('running')
  }

}
export default Auth2;
