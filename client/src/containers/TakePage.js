import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TakeQuiz from '../components/TakeQuiz.js';
import Auth2 from '../modules/Auth2.js';

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

      };
      this.nextQuestion = this.nextQuestion.bind(this);

  }

  nextQuestion(event){
    var question = Auth2.getQuizQuestion();
    question++;
    Auth2.setQuizQuestion(question);
    this.props.history.push('/take');
  }

  componentDidMount(){
   var quest = Auth2.getQuizQuestion();

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/quizzes/' + Auth2.getquizID());
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    console.log(xhr.status);
    xhr.addEventListener('load', () => {
      console.log(xhr.status);
      console.log("test3");
      if (xhr.status === 200) {
        var total = xhr.response.questions.length;
        if (quest == total){
          this.props.history.push('/');
        }
        else{
        console.log(xhr.response.questions.length);
        var qid1 = this.state.quiz;
        var answers = this.state.answers;
        qid1['id'] = xhr.response.questions[quest];
        answers['a1'] = xhr.response.answers[quest][0];
        answers['a2'] = xhr.response.answers[quest][1];
        answers['a3'] = xhr.response.answers[quest][2];
        answers['a4'] = xhr.response.answers[quest][3];
        this.setState({
          qid1
        });
        }
      }
    });
    xhr.send();
  }

  render(){
    return(
      <TakeQuiz
        quiz={this.state.quiz}
        answers={this.state.answers}
        next = {this.nextQuestion}
      />
    );
  }
};
export default TakePage;
