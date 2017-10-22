import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardText
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green'}}>{secretData}</CardText>}
  </Card>
);

export default Dashboard
