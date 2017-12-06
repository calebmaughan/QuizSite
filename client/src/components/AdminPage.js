import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AdminPage = ({
  x,
  text,

}) => (
  <Card className='container' style={{borderRadius: '25px'}}>
    <CardTitle title={text.subtitle} subtitle={text.title} titleColor = "#E4EEFF" subtitleColor="#E4EEFF"/>
    <div>
    <Link to={text.link}>
    <RaisedButton onClick={x} label ={text.buttonlabel} primary/>
    </Link>
    </div>
    </Card>
)

export default AdminPage;
