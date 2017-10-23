import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const QuizList = ({
  quizList,
  onStart,
  onEdit
}) => (
    <Paper zDepth={2}>
      {quizList.map((quizId,i) => (
        <div key={i}>
          {quizId}
          <RaisedButton label={'Start'} primary={true} onClick={onStart.bind(this, quizId)}/>
          <RaisedButton label={'Edit'} primary={true} onClick={onEdit.bind(this, quizId)}/>
          <Divider/>
        </div>
      ))}
    </Paper>
)

export default QuizList;
