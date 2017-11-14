import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const HomePage = () => (
  <Card className='container'>
    <CardTitle title="Home Page" subtitle="Enter a quiz ID to take a quiz"/>
    <div>
      <TextField
        floatingLabelText = "Quiz ID"
        name="id"
        />
    </div>
    <div>
      <RaisedButton type="submit" label="Submit" primary />
    </div>
  </Card>
);

export default HomePage;
