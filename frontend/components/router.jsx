import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import AppContainer from './app/app_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import Account from './account/account.jsx';
class AppRouter extends React.Component{

  _redirectUnlessLoggedIn(nextState, replace){
    if (!window.currentUser) {
      replace('/');
    }
  }

  render(){
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ AppContainer } >
          <Route path='/account'
                 component={ Account }
                 onEnter={this._redirectUnlessLoggedIn} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
