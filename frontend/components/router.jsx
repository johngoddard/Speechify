import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import AppContainer from './app/app_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import Account from './account/account.jsx';
import { connect } from 'react-redux';
class AppRouter extends React.Component{

  constructor(props){
    super(props);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);
  }

  _redirectUnlessLoggedIn(nextState, replace){
    if (!this.props.currentUser) {
      replace('/');
    }
  }


  render(){
    return (
      <Router history={ hashHistory }>
        <Route path='/'
          component={ AppContainer } >
          <Route path='/account'
                 component={ Account }
                 onEnter={this._redirectUnlessLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


export default connect(mapStateToProps)(AppRouter);
