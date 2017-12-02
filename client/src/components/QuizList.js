import React from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const QuizList = ({
  quizList,
  onStart,
  onEdit,
  onView
}) => (
    <Paper zDepth={5}>
      {quizList.map((quizId,i) => (
        <div  key={i}>

        <Link to='/result'>
            <FlatButton label={quizId} fullWidth={true} onClick={onView.bind(this, quizId)} />
            </Link>

          <div>

            <Link to= '/take'><RaisedButton className='ourButtons' label={'Start'} onClick={onStart.bind(this, quizId)} primary/></Link>
            <Link to='/edit'>
               <RaisedButton label={'Edit'} onClick={onEdit.bind(this, quizId)} secondary/>
            </Link>
          </div>
          <Divider />
        </div>
      ))}
    </Paper>
)

export default QuizList;
