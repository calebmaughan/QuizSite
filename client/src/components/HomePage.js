import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const HomePage = ({
    onSubmit,
    quizId,
    changeID
}) => (
  <Card className='container'>
    <CardTitle title="TRCK BLMP" subtitle="Enter a quiz ID to take a quiz"/>
    <form onSubmit={onSubmit}>
    <div>
      <TextField className='text-center'
        floatingLabelText = "Quiz ID"
        name="id"
        value={quizId.id}
        onChange={changeID}
        />
    </div>
    <div>
      <RaisedButton type="submit" label="Submit" primary />
    </div>
    </form>
  </Card>
);

export default HomePage;
