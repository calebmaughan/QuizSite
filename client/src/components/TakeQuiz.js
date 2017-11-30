import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const TakeQuiz = ({
    quiz,
    answers,
    next

}) =>(
  <Card className="container">
    <CardTitle title = {quiz.id}/>
    <form onSubmit={next}>
    <div>
      <RaisedButton className = "answer" type = 'submit' label = {answers.a1} primary/>
      <RaisedButton className = "answer" type = 'submit' label = {answers.a2} primary/>
    </div>
    <div>
    <RaisedButton className = "answer" type = 'submit' label = {answers.a3} primary/>
    <RaisedButton className = "answer" type = 'submit' label = {answers.a4} primary/>
    </div>
    </form>
  </Card>

)

export default TakeQuiz;
