import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

import Auth from '../modules/Auth';

import '../static/css/style.css';

import DashboardPage from '../containers/DashboardPage.js';
import LoginPage from '../containers/LoginPage.js';
import SignUpPage from '../containers/SignUpPage.js';
import Home from '../containers/Home.js';
import TakeQuiz from '../components/TakeQuiz.js';
import TakePage from '../containers/TakePage.js';
import EditQuizPage from '../containers/EditQuizPage.js';


var Base = ({
  onLogout
}) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/" style={{ textDecoration: 'none' }}>TRCKBLMP</Link>
      </div>

      { Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout" onClick={onLogout} style={{ textDecoration: 'none' }}>Logout</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link>
        </div>
      )}

    </div>

    <Switch>
      { Auth.isUserAuthenticated() ? (
        <Switch>
          <Route exact path="/" component={DashboardPage}/>
          <Route path="/edit" component={EditQuizPage}/>
        </Switch>
      ) : (
        <Route exact path="/" component={Home}/>
      )}
      <Route  path="/login" component={LoginPage}/>
      <Route  path="/signup" component={SignUpPage}/>
      <Route  path="/logout" component={LoginPage}/>
      <Route  path="/take" component={TakePage}/>
    </Switch>

  </div>
);

Base.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Base;
