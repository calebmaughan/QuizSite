import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TakeQuiz from '../components/TakeQuiz.js';
import Auth2 from '../modules/Auth2.js';

class TakePage extends React.Component{


  constructor(props){
      super(props);

      this.state = {
        quiz:{
          id:''
        }
      };

  }
  componentDidMount(){
    var qid = this.state.quiz;
    qid['id'] = Auth2.getquizID();
    this.setState({
      qid
    })
  }

  render(){
    return(
      <TakeQuiz
        quiz={this.state.quiz}
      />
    );
  }
};
export default TakePage;
