import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const TakeQuiz = ({
    quiz

}) =>(
  <Card className="container" style={{borderRadius: '25px'}}>
    <CardTitle className="title" title = {quiz.id} titleColor = "#E4EEFF"/>
    <form>
    <div>
      <RaisedButton className = "answer" type = 'submit' label = 'answer 1' primary/>
      <RaisedButton className = "answer" type = 'submit' label = 'answer 2' primary/>
    </div>
    <div>
    <RaisedButton className = "answer" type = 'submit' label = 'answer 3' primary/>
    <RaisedButton className = "answer" type = 'submit' label = 'answer 4' primary/>
    </div>
    </form>
  </Card>

)

export default TakeQuiz;
