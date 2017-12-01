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
        }
      };

  }
  componentDidMount(){
    console.log("this is only a test");
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/quizzes/' + Auth2.getquizID());
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    console.log(xhr.status);
    xhr.addEventListener('load', () => {
      console.log(xhr.status);
      console.log("test3");
      if (xhr.status === 200) {
        console.log("test2");
        var qid1 = this.state.quiz;
        var answers = this.state.answers;
        qid1['id'] = xhr.response.questions[0];
        answers['a1'] = xhr.response.answers[0][0];
        answers['a2'] = xhr.response.answers[0][1];
        answers['a3'] = xhr.response.answers[0][2];
        answers['a4'] = xhr.response.answers[0][3];
        this.setState({
          qid1
        });
      }
    });
    xhr.send();
  }

  render(){
    return(
      <TakeQuiz
        quiz={this.state.quiz}
        answers={this.state.answers}
      />
    );
  }
};
export default TakePage;
