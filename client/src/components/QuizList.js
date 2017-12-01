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
    <Paper zDepth={2}>
      {quizList.map((quizId,i) => (
        <div  key={i}>

        <Link to='/result'>
            <FlatButton label={quizId} primary={true} fullWidth={true} onClick={onView.bind(this, quizId)} />
            </Link>


          <FlatButton label={quizId} primary={true} fullWidth={true} onClick={onView.bind(this, quizId)} />

          <div>

            <Link to= '/take'><RaisedButton label={'Start'} hoverColor="#23c2db" backgroundColor="#ccc4c3" Secondary={true}  onClick={onStart.bind(this, quizId)}/></Link>
            <Link to='/edit'>
               <RaisedButton label={'Edit'}  Secondary={true}  onClick={onEdit.bind(this, quizId)}/>
            </Link>
          </div>
          <Divider/>
        </div>
      ))}
    </Paper>
)

export default QuizList;
