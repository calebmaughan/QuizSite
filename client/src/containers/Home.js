import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import HomePage from '../components/HomePage.js';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      quizID:{
        id: ' '
      }
    };

    this.submitForm = this.submitForm.bind(this);

  }

  submitForm(event){
    console.log('route to quiz here');
  }

  render() {
    return (
      <HomePage
        onSubmit={this.submitForm}
        quizID={this.state.quizID}
      />
    );
  }
};

export default Home;
