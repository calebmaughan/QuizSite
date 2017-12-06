import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Results from '../components/Results.js';
import ResultAuth from '../modules/ResultAuth.js';
import Chart from 'chart.js';


class ResultsPage extends React.Component{


  constructor(props){
      super(props);

      this.state = {
        quizAccessID:'',
          questions:[],
        answers:[],
        answersClickNumber:[]
      };

  }
  componentDidMount(){
    console.log("this is a test for results page");
    console.log("quiz ID: "+ResultAuth.getquizID());
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/quizzes/' + ResultAuth.getquizID());
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    console.log(xhr.status);
    xhr.addEventListener('load', () => {
      console.log(xhr.status);
      console.log("test3");
      if (xhr.status === 200) {
        console.log("access ID: "+xhr.response.quizAccessID);
        console.log("answers: "+xhr.response.answers);
        console.log("questions: "+xhr.response.questions);
        console.log("answersClicked number: "+xhr.response.answersClickNumber);


        this.setState({
          quizAccessID:ResultAuth.getquizID(),
          answers:xhr.response.answers,
          questions:xhr.response.questions,
          answersClickNumber:xhr.response.answersClickNumber
        });
      }
    });
    xhr.send();
  }

  render(){
    return(
      <Results
        quizaccessid={this.state.quizAccessID}
          questions={this.state.questions}
        answers={this.state.answers}
        answersClickNumber={this.state.answersClickNumber}

      />

    );
  }
};
export default ResultsPage;
