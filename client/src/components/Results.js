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
           <RaisedButton label={answers[i][0] + " " + answersClickNumber[i][0]} disableTouchRipple={true} primary className="results">
          
           </RaisedButton>
           </div>
           <div>
            <RaisedButton label={answers[i][1] + " " +  answersClickNumber[i][1]} disableTouchRipple={true} primary className="results">

           </RaisedButton>
           </div>
           <div>
           <RaisedButton label={answers[i][2] + " " + answersClickNumber[i][2]} disableTouchRipple={true} primary className="results">

           </RaisedButton>
           </div>
           <div>
           <RaisedButton label={answers[i][3] + " " + answersClickNumber[i][3]} disableTouchRipple={true} primary className="results" >

           </RaisedButton>
           </div>
           <Divider/>
         </div>
       ))}
     </Card>
)

export default Results;
