import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const HomePage = () => (
  <Card className='container'>
    <CardTitle title="React Application" subtitle="This is the home page."/>
    <div>
      <TextField
        floatingLabelText = "Quiz ID"
        name="id"
        >
    </div>
  </Card>
);

export default HomePage;
