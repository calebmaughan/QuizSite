import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const TakeQuiz = ({


}) =>(
  <Card className="container">
    <CardTitle title = "Question here"/>
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
