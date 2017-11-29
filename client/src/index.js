import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import theme from '../src/static/mui/theme'
import BasePage from './containers/BasePage.js';

injectTapEventPlugin();

const history = createBrowserHistory();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <Router history={history}>
      <Route path="/" component={BasePage}/>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
