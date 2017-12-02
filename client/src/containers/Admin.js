import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AdminPage from '../components/AdminPage.js';
import Auth2 from '../modules/Auth2.js';

class Admin extends React.Component{

  constructor(props) {
    super(props);
      this.state = {
        text:{
          synced:'0'
        },
        nextText:{
          buttonlabel:'Next',
          subtitle:'Press next to go to the next question',
          link:'/take'
        },
        finishText:{
          buttonlabel:'Finish',
          subtitle:'Press finish to finish the quiz',
          link:'/'
        }
      };

      this.nextQuestion = this.nextQuestion.bind(this);
      this.finish = this.finish.bind(this);

  }

  nextQuestion(event){
    console.log("click test");
    console.log(Auth2.getQuizQuestion());
    var question = Auth2.getQuizQuestion();
    question++;
    Auth2.setQuizQuestion(question);
    console.log(question);
    const nextQuest = encodeURIComponent(question);
    var form = `onQuestion=${nextQuest}`;
    const xhr = new XMLHttpRequest();
    xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/next');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {

      if (xhr.status === 200) {
        console.log("200 status");
      }
    });
    xhr.send(form);
    window.location.reload();
  }

  finish(event){
    const nextQuest = encodeURIComponent(0);
    const published = encodeURIComponent(false);
    var form = `onQuestion=${nextQuest}`;
    var form1 = `isPublished=${published}`;
    const xhr = new XMLHttpRequest();
    xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/next');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {

      if (xhr.status === 200) {
        console.log("200 status");
      }
    });
    xhr.send(form);

    const xhr1 = new XMLHttpRequest();
    xhr1.open('put', '/quizzes/' + Auth2.getquizID() + '/publish');
    xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr1.responseType = 'json';
    xhr1.addEventListener('load', () => {

      if (xhr1.status === 200) {
        console.log("200 status");
      }
    });
    xhr1.send(form1);
  }

  componentDidMount(){
    console.log("test");
    const xhr1 = new XMLHttpRequest();
    console.log(xhr1.status);
    console.log(Auth2.getquizID());
    xhr1.open('get', '/quizzes/' + Auth2.getquizID());
    console.log(xhr1.status);
    xhr1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr1.responseType = 'json';
    xhr1.addEventListener('load', () => {
      console.log(Auth2.getquizID());
      console.log(xhr1.status);
      if (xhr1.status === 200) {
        var totalQuestion = xhr1.response.questions.length;

        var current = Auth2.getQuizQuestion();
        current++;
        if(current >= totalQuestion){
          var change = this.state.text;
          change['synced']='1'
          this.setState({
            change
          });
        }
        else{
          var change1 = this.state.text;
          change1['synced']='0';
          this.setState({
            change1
          });
        }

      }
    });
    xhr1.send();
  }


  render(){
    if(this.state.text['synced'] === '0'){
      return(
        <AdminPage
          text = {this.state.nextText}
          x = {this.nextQuestion}
        />
      );
    }

    else{
      return(
        <AdminPage
        text = {this.state.finishText}
        x = {this.finish}
        />
      );
    }

  }
};

export default Admin;
