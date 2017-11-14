import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import Auth from '../modules/Auth';

import '../static/css/style.css';

import DashboardPage from '../containers/DashboardPage.js';
import LoginPage from '../containers/LoginPage.js';
import SignUpPage from '../containers/SignUpPage.js';
import Home from '../containers/Home.js';


var Base = ({
  onLogout
}) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/">React App</NavLink>
      </div>

      { Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout" onClick={onLogout}>Logout</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    <Switch>
      { Auth.isUserAuthenticated() ? (
        <Route exact path="/" component={DashboardPage}/>
      ) : (
        <Route exact path="/" component={Home}/>
      )}
      <Route  path="/login" component={LoginPage}/>
      <Route  path="/signup" component={SignUpPage}/>
      <Route  path="/logout" component={LoginPage}/>
    </Switch>

  </div>
);

Base.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Base;
