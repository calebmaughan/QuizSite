import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const TakeQuiz = ({
    quiz

}) =>(
  <Card className="container">
    <CardTitle title = {quiz.id}/>
    <form>
    <div>
      <RaisedButton className = "answer" type = 'submit' label = 'answer 1'/>
      <RaisedButton className = "answer" type = 'submit' label = 'answer 2'/>
    </div>
    <div>
    <RaisedButton className = "answer" type = 'submit' label = 'answer 3'/>
    <RaisedButton className = "answer" type = 'submit' label = 'answer 4'/>
    </div>
    </form>
  </Card>

)

export default TakeQuiz;
