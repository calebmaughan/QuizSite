import React from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card,
  CardTitle,
  CardText} from 'material-ui/Card';
const Results = ({
    quizaccessid,
    answers,
    questions,
    answersClickNumber
}) =>(
  <Card className="container">
    <CardTitle title = {"Quiz: "+quizaccessid}/>
    <Divider/>
       {questions.map((questions,i) => (
         <div  key={i}>
         <CardTitle title ={questions}/>
           <div>
           <RaisedButton label={answers[i][0] } disableTouchRipple={true} >
          {answersClickNumber[i][0]}
           </RaisedButton>
           </div>
           <div>
            <RaisedButton label={answers[i][1] } disableTouchRipple={true} backgroundColor="#aeb7c4">
           {answersClickNumber[i][1]}
           </RaisedButton>
           </div>
           <div>
           <RaisedButton label={answers[i][2] } disableTouchRipple={true} >
          {answersClickNumber[i][2]}
           </RaisedButton>
           </div>
           <div>
           <RaisedButton label={answers[i][3] } disableTouchRipple={true} backgroundColor="#aeb7c4" >
          {answersClickNumber[i][3]}
           </RaisedButton>
           </div>
           <Divider/>
         </div>
       ))}
     </Card>
)

export default Results;
