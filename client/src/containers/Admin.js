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
        },
        startText:{
          buttonlabel:'Start',
          subtitle:'',
          link:'/take'
        }
      };

      this.nextQuestion = this.nextQuestion.bind(this);
      this.finish = this.finish.bind(this);
      this.startQuiz = this.startQuiz.bind(this);

  }

  startQuiz(event){
    const published = encodeURIComponent(true);
    var form = `isPublished=${published}`;
    const xhr = new XMLHttpRequest();
    xhr.open('put', '/quizzes/' + Auth2.getquizID() + '/publish');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log("200 status");
      }
    });
    xhr.send(form);
    setTimeout(window.location.reload(), 1000);
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
    setTimeout(window.location.reload(), 1000);
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
        var published = xhr1.response.isPublished;
        console.log(published);
        if(!published){
          var accessID=xhr1.response.quizAccessID;
          var change3 = this.state.startText;
          var change2 = this.state.text;
          change2['synced']='1';
          this.setState({
            change2
          });
          change3['subtitle']='Quiz ID: ' + accessID;
          this.setState({
            change3
          });
          if(Auth2.getOneReload()=='0'){
            Auth2.setOneReload('1');
            window.location.reload();
          }
        }
        else{
        //Auth2.setOneReload('0');
        var current = Auth2.getQuizQuestion();
        current++;
        if(current >= totalQuestion){
          var change = this.state.text;
          change['synced']='2'
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
          if(Auth2.getOneReload()=='0'){
            Auth2.setOneReload('1');
            window.location.reload();
          }
          Auth2.setOneReload('0');
        }
      }
      }//end 200 status
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
    else if(this.state.text['synced']==='1'){
      return(
        <AdminPage
        text = {this.state.startText}
        x = {this.startQuiz}
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
