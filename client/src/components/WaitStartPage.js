import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const WaitStartPage = ({

}) => (
  <Card className='container' style={{borderRadius: '25px'}}>
    <CardTitle title="TRCK BLMP" subtitle="Wait for the quiz to start" titleColor = "#E4EEFF" subtitleColor="#E4EEFF"/>
    <Link to='/'>
    Home
    </Link>
    </Card>
);

export default WaitStartPage;
