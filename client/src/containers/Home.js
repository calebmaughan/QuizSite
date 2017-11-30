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
        id: '1234'
      }
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeID = this.changeID.bind(this);

  }
  changeID(event) {
    var field = event.target.name;
    var quizId = this.state.quizID;
    quizId[field] = event.target.value;

    this.setState({
      quizId
    });
  }

  submitForm(event){
    const id = this.state.quizID.id;
    Auth2.setquizID(id);
    Auth2.setQuizQuestion(0);
    this.props.history.push('/take');
  }

  render() {
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
