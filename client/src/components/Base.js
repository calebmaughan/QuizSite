import React, { PropTypes } from 'react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import '../static/css/style.css';

import HomePage from './HomePage.js';
import LoginPage from '../containers/LoginPage.js';
import SignUpPage from '../containers/SignUpPage.js';

var Base = () => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/">React App</NavLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>

    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/login" component={LoginPage}/>
      <Route  path="/signup" component={SignUpPage}/>
    </Switch>

  </div>
);

// Base.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default Base;
