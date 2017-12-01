import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AdminPage from '../components/AdminPage.js';
import Auth2 from '../modules/Auth2.js';

class Admin extends React.Component{

  constructor(props) {
    super(props)

    
  }

  render(){
    return(
      <AdminPage/>
    )
  }
};

export default Admin;
