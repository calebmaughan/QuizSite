import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container" style={{borderRadius: '25px'}}>
    <form action='/' onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          errorStyle={{color: '#A10559'}}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          name="password"
          type="password"
          onChange={onChange}
          errorText={errors.password}
          errorStyle={{color: '#A10559'}}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Login" primary />
      </div>

      <CardText className="cardtext">Dont have an account? <Link to={'/signup'} style={{ textDecoration: 'none' }}>Signup</Link></CardText>
    </form>
  </Card>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors:   PropTypes.object.isRequired,
  user:     PropTypes.object.isRequired
}

export default LoginForm;
