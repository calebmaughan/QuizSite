import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const TakeQuiz = ({
    quiz,
    answers,
    next1,
    next2,
    next3,
    next4

}) =>(
  <Card className="container">
    <CardTitle title = {quiz.id}/>
    <div>
      <RaisedButton className = "answer" onClick={next1} label = {answers.a1} primary/>
      <RaisedButton className = "answer" onClick={next2} label = {answers.a2} primary/>
    </div>
    <div>
    <RaisedButton className = "answer" onClick={next3} label = {answers.a3} primary/>
    <RaisedButton className = "answer" onClick={next4} label = {answers.a4} primary/>
    </div>
  </Card>

)

export default TakeQuiz;
