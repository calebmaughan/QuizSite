import React from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

const QuizList = ({
  quizList,
  isLoading,
  onStart,
  onEdit,
  onView
}) => (
    <div>
      { isLoading ? (
        <Card className="container" style={{borderRadius: '25px'}}>
          <CircularProgress/>
        </Card>
      ) : (
        <Paper zDepth={5}>
          {quizList.map((quiz,i) => (
            <div  key={i}>

            <Link to='/result'>
                <FlatButton
                  label={quiz.title}
                  fullWidth={true}
                  onClick={onView.bind(this, quiz.quizId)}
                />
              </Link>

              <div>
                <Link to= '/take'>
                  <RaisedButton
                    className='ourButtons' label={'Start'}
                    onClick={onStart.bind(this, quiz.quizId)}
                    primary
                  />
                </Link>

                <Link to='/edit'>
                   <RaisedButton
                     label={'Edit'}
                     onClick={onEdit.bind(this, quiz.quizId)}
                     secondary
                    />
                </Link>
              </div>

              <Divider />
            </div>
          ))}
        </Paper>
      )}
    </div>
)

export default QuizList;
