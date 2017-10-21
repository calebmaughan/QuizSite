import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
// import registerServiceWorker from './registerServiceWorker';

import Base from './components/Base.js';

injectTapEventPlugin();

const history = createHashHistory();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={history}>
      <Route path="/" component={Base}/>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
