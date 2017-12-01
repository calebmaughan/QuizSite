class ResultAuth{

  static setquizID(id){
    localStorage.setItem('quizID', id);
  }

  static getquizID(){
    return localStorage.getItem('quizID');
  }

}
export default ResultAuth;
