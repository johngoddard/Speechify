import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import AppContainer from './app/app_container.js';
import SessionFormContainer from './session_form/session_form_container.js';

class AppRouter extends React.Component{


  render(){
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ AppContainer } >
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
