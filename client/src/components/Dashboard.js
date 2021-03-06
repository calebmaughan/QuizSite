import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton  from 'material-ui/RaisedButton';
import QuizListPage from '../containers/QuizListPage';
const Dashboard = ({
  secretData,
}) => (
  <Card className="container" style={{borderRadius: '25px'}}>
    <CardText
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green'}}>{secretData}</CardText>}
    <Link to='/edit'>
      <RaisedButton label="Make Quiz" primary={true} style={{margin:12}}/>
    </Link>
    <QuizListPage />
  </Card>
);

export default Dashboard
