import React, { PropTypes } from 'react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import Auth from '../modules/Auth';

import '../static/css/style.css';

import HomePage from './HomePage.js';
import DashboardPage from '../containers/DashboardPage.js';
import LoginPage from '../containers/LoginPage.js';
import SignUpPage from '../containers/SignUpPage.js';


const deauthenticate = () => {
  Auth.deauthenticateUser();
}

var Base = () => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/">React App</NavLink>
      </div>

      { Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Logout</Link>
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
        <Route exact path="/" component={HomePage}/>
      )}
      <Route  path="/login" component={LoginPage}/>
      <Route  path="/signup" component={SignUpPage}/>
      <Route  path="/logout" component={LoginPage} onEnter={deauthenticate} />
    </Switch>

  </div>
);

// Base.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default Base;
