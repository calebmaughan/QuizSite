import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TakeQuiz from '../components/TakeQuiz.js';

class TakePage extends React.Component{

  constructor(props){
      super(props);
      
  }

  render(){
    return(
      <TakeQuiz
      />
    );
  }
};
export default TakePage;
