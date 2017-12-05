import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const HomePage = ({
    onSubmit,
    quizId,
    changeID
}) => (
  <Card className='container' style={{borderRadius: '25px'}}>
    <CardTitle title="TRCK BLMP" subtitle="Enter a quiz ID to take a quiz" titleColor = "#E4EEFF" subtitleColor="#E4EEFF"/>
    <div>
      <TextField className='text-center'
        floatingLabelText = "Quiz ID"
        name="id"
        value={quizId.id}
        onChange={changeID}
        errorText={quizId.error}
        />
    </div>
    <div className='sub'>
      <RaisedButton onClick={onSubmit} label="Submit" primary />
    </div>
  </Card>
);

export default HomePage;
