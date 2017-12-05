import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import HomePage from '../components/HomePage.js';
import Auth2 from '../modules/Auth2.js';

class Home extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      quizID:{
        id: '',
        error:''
      }
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeID = this.changeID.bind(this);
    this.getAccessID = this.getAccessID.bind(this);

  }

  getAccessID(id){
      console.log(id);
      const xhr = new XMLHttpRequest
      var string = '/quizzes' + id + 'access';
      xhr.open('get', '/quizzes/' + id + '/access');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if(xhr.status===200){
          console.log("success");
          var newID = xhr.response._id;
          console.log(newID);
          Auth2.setquizID(newID);
        }
      });
      xhr.send();

  }

  changeID(event) {
    var field = event.target.name;
    var quizId = this.state.quizID;
    quizId[field] = event.target.value;

    this.setState({
      quizId
    });
    console.log(this.state.quizID.id);
  }

  submitForm(event){
    const id = this.state.quizID.id;
    console.log(id);
    Auth2.setquizID("000");
    this.getAccessID(id);
    //Auth2.setquizID(id);
    Auth2.setQuizQuestion(0);
    this.props.history.push('/take');



  }

  render() {
    if(Auth2.getRunning() == '1'){
      Auth2.setRunning('0');
      window.location.reload();
    }
      return (
        <HomePage
          onSubmit={this.submitForm}
          quizId={this.state.quizID}
          changeID={this.changeID}
        />
      );

  }
};

export default Home;
