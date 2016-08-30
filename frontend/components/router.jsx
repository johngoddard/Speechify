import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session_form/session_form_container.js';

class AppRouter extends React.Component{


  render(){
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
