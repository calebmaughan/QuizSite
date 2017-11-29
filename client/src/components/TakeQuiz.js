import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const TakeQuiz = ({
    quiz,
    answers

}) =>(
  <Card className="container">
    <CardTitle title = {quiz.id}/>
    <form>
    <div>
<<<<<<< HEAD
      <RaisedButton className = "answer" type = 'submit' label = {answers.a1} primary/>
      <RaisedButton className = "answer" type = 'submit' label = {answers.a2} primary/>
    </div>
    <div>
    <RaisedButton className = "answer" type = 'submit' label = {answers.a3} primary/>
    <RaisedButton className = "answer" type = 'submit' label = {answers.a4} primary/>
=======
      <RaisedButton className = "answer" type = 'submit' label = {answers.a1}/>
      <RaisedButton className = "answer" type = 'submit' label = {answers.a2}/>
    </div>
    <div>
    <RaisedButton className = "answer" type = 'submit' label = {answers.a3}/>
    <RaisedButton className = "answer" type = 'submit' label = {answers.a4}/>
>>>>>>> master
    </div>
    </form>
  </Card>

)

export default TakeQuiz;
