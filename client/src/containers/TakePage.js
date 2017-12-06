import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TakeQuiz from '../components/TakeQuiz.js';
import Auth2 from '../modules/Auth2.js';
import WaitPage from '../components/WaitPage.js';
import DonePage from '../components/DonePage.js';
import WaitStartPage from '../components/WaitStartPage.js';

class TakePage extends React.Component{


  constructor(props){
      super(props);

      this.state = {
        quiz:{
          question:''
        },
        answers:{
          a1:'',
          a2:'',
          a3:'',
          a4:''
        },
        synced:{
          value:''
        }

      };
      this.nextQuestion1 = this.nextQuestion1.bind(this);
      this.nextQuestion2 = this.nextQuestion2.bind(this);
      this.nextQuestion3 = this.nextQuestion3.bind(this);
      this.nextQuestion4 = this.nextQuestion4.bind(this);
      this.testfunc = this.testfunc.bind(this);
      //this.state = this.state.bind(this);


  }

  nextQuestion1(event){
    var question = Auth2.getQuizQuestion();
    var question2 = question;
    var number
    const xhr1 = new XMLHttpRequest();
    xhr1.open('get', '/quizzes/' + Auth2.getquizID());
    xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr1.responseType = 'json';
    xhr1.addEventListener('load', () => {
      if (xhr1.status === 200) {
        number = xhr1.response.answersClickNumber[question2];
        var number1 = number[0];
        number1++;
        console.log(number);
        number[0]=number1;
      }
    });
    xhr1.send();

    function help(){
      console.log(number);
      const first = encodeURIComponent(0);
      const second = encodeURIComponent(question2);
      const clicked = encodeURIComponent(JSON.stringify(number));
      //console.log(JSON.parse(clicked));
      var form = `firstIndex=${first}&secondIndex=${second}&clicks=${clicked}`;
      const xhr = new XMLHttpRequest();
      xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/incrementAnswer');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          console.log("200 status");
        }
      });
      xhr.send(form);
    }
    setTimeout(help, 1000);
      question++;
      Auth2.setQuizQuestion(question);
  }

  nextQuestion2(event){
    var question = Auth2.getQuizQuestion();
    var question2 = question;
    var number
    const xhr1 = new XMLHttpRequest();
    xhr1.open('get', '/quizzes/' + Auth2.getquizID());
    xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr1.responseType = 'json';
    xhr1.addEventListener('load', () => {
      if (xhr1.status === 200) {
        number = xhr1.response.answersClickNumber[question2];
        var number1 = number[1];
        number1++;
        console.log(number);
        number[1]=number1;
      }
    });
    xhr1.send();

    function help(){
      console.log(number);
      const first = encodeURIComponent(0);
      const second = encodeURIComponent(question2);
      const clicked = encodeURIComponent(JSON.stringify(number));
      //console.log(JSON.parse(clicked));
      var form = `firstIndex=${first}&secondIndex=${second}&clicks=${clicked}`;
      const xhr = new XMLHttpRequest();
      xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/incrementAnswer');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          console.log("200 status");
        }
      });
      xhr.send(form);
    }
    setTimeout(help, 1000);
    question++;
    Auth2.setQuizQuestion(question);
  }

  nextQuestion3(event){
    var question = Auth2.getQuizQuestion();
    var question2 = question;
    var number
    const xhr1 = new XMLHttpRequest();
    xhr1.open('get', '/quizzes/' + Auth2.getquizID());
    xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr1.responseType = 'json';
    xhr1.addEventListener('load', () => {
      if (xhr1.status === 200) {
        number = xhr1.response.answersClickNumber[question2];
        var number1 = number[2];
        number1++;
        console.log(number);
        number[2]=number1;
      }
    });
    xhr1.send();

    function help(){
      console.log(number);
      const first = encodeURIComponent(0);
      const second = encodeURIComponent(question2);
      const clicked = encodeURIComponent(JSON.stringify(number));
      //console.log(JSON.parse(clicked));
      var form = `firstIndex=${first}&secondIndex=${second}&clicks=${clicked}`;
      const xhr = new XMLHttpRequest();
      xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/incrementAnswer');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          console.log("200 status");
        }
      });
      xhr.send(form);
    }
    setTimeout(help, 1000);
    question++;
    Auth2.setQuizQuestion(question);
  }

  nextQuestion4(event){
    var question = Auth2.getQuizQuestion();
    var question2 = question;
    var number
    const xhr1 = new XMLHttpRequest();
    xhr1.open('get', '/quizzes/' + Auth2.getquizID());
    xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr1.responseType = 'json';
    xhr1.addEventListener('load', () => {
      if (xhr1.status === 200) {
        number = xhr1.response.answersClickNumber[question2];
        var number1 = number[3];
        number1++;
        console.log(number);
        number[3]=number1;
      }
    });
    xhr1.send();

    function help(){
      console.log(number);
      const first = encodeURIComponent(0);
      const second = encodeURIComponent(question2);
      const clicked = encodeURIComponent(JSON.stringify(number));
      //console.log(JSON.parse(clicked));
      var form = `firstIndex=${first}&secondIndex=${second}&clicks=${clicked}`;
      const xhr = new XMLHttpRequest();
      xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/incrementAnswer');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          console.log("200 status");
        }
      });
      xhr.send(form);
    }
    setTimeout(help, 1000);
    question++;
    Auth2.setQuizQuestion(question);
  }

  testfunc(){
    Auth2.setRunning('1');
    var sync = this.state.synced;
    var qid1 = this.state.quiz;
    var answers = this.state.answers;
    var quest = Auth2.getQuizQuestion();
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/quizzes/' + Auth2.getquizID());
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      //console.log(Auth2.getquizID());
      //console.log(xhr.status);
      if (xhr.status === 200) {
        if(xhr.response.isPublished){

        var total = xhr.response.questions.length;
        var currentQuestion = xhr.response.onQuestion;
        //if current question is greater than total question, done page
        if (quest >= total){
          sync['value'] = '1';
          this.setState({
            sync
          });
        }
        else{
          //if current question equals database, question/answer
          if(currentQuestion == quest){
            sync['value'] = '0';
            qid1['id'] = xhr.response.questions[quest];
            answers['a1'] = xhr.response.answers[quest][0];
            answers['a2'] = xhr.response.answers[quest][1];
            answers['a3'] = xhr.response.answers[quest][2];
            answers['a4'] = xhr.response.answers[quest][3];
            this.setState({
              qid1,
              sync
            });
          }
          //not same as database, wait page
          else if(currentQuestion > quest){
            Auth2.setQuizQuestion(currentQuestion);
          }
          else{
            sync['value'] = '3';
            this.setState({
              sync
            });
          }
        }
      }
      //not started"published", wait for quiz to start page
      else{
        sync['value'] = '2';
        this.setState({
          sync
        });
      }
    }
    else{
      this.props.history.push('/');
    }
    });

    xhr.send();


  }



  componentDidMount(){
    setInterval(this.testfunc, 500);

}//end compnent mount


  render(){
    //console.log(this.state.synced);
    if(this.state.synced['value'] == '0'){
      return(
        <TakeQuiz
          quiz={this.state.quiz}
          answers={this.state.answers}
          next1 = {this.nextQuestion1}
          next2 = {this.nextQuestion2}
          next3 = {this.nextQuestion3}
          next4 = {this.nextQuestion4}
        />
      );
    }
    else if(this.state.synced['value'] == '1'){
      return(
        <DonePage/>
      )
    }
    else if(this.state.synced['value'] == '2'){
      return(
        <WaitStartPage/>
      )
    }
    else{
      return(
        <WaitPage/>
      )
    }
  }
};
export default TakePage;
