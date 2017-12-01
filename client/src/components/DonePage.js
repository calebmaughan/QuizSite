import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const DonePage = ({

}) => (
  <Card className='container' style={{borderRadius: '25px'}}>
    <CardTitle title="Quiz Done" subtitle="Thanks for participating!" titleColor = "#E4EEFF" subtitleColor="#E4EEFF"/>
      <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
    </Card>
);

export default DonePage;
