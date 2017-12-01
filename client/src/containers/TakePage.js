import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TakeQuiz from '../components/TakeQuiz.js';
import Auth2 from '../modules/Auth2.js';
import WaitPage from '../components/WaitPage.js';
import DonePage from '../components/DonePage.js';

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
      this.nextQuestion = this.nextQuestion.bind(this);


  }

  nextQuestion(event){
    var question = Auth2.getQuizQuestion();
    question++;
    Auth2.setQuizQuestion(question);
  }



  componentDidMount(){
    setInterval(()=>{
    var quest = Auth2.getQuizQuestion();
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/quizzes/' + Auth2.getquizID());
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    console.log(xhr.status);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        var total = xhr.response.questions.length;
        var currentQuestion = xhr.response.onQuestion;
        if (quest >= total){
          var sync2 = this.state.synced;
          sync2['value'] = '1';
          this.setState({
            sync2
          });
        }
        else{
          if(currentQuestion == quest){

            console.log(xhr.response.questions.length);
            var qid1 = this.state.quiz;
            var answers = this.state.answers;
            var sync = this.state.synced;
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
          else{
            //console.log("test for false");
            var sync1 = this.state.synced;
            //console.log(sync1);
            sync1['value'] = '2';
            //console.log(sync1);
            this.setState({
              sync1
            });
            //console.log(this.state.synced);
          }
        }
      }
    });
    console.log("test1");
    xhr.send();
  }, 500);
  //use this layout!!!
//  setInterval(()=>{
  //  console.log(this.state.synced);
//  }, 500);
}//end compnent mount


  render(){
    console.log(this.state.synced);
    if(this.state.synced['value'] == '0'){
      return(
        <TakeQuiz
          quiz={this.state.quiz}
          answers={this.state.answers}
          next = {this.nextQuestion}
        />
      );
    }
    else if(this.state.synced['value'] == '1'){
      return(
        <DonePage/>
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
