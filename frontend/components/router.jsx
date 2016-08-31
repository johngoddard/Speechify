import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import AppContainer from './app/app_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import Account from './account/account.jsx';
import { connect } from 'react-redux';
import TracksIndexContainer from './tracks/tracks_index_container.js';
import * as TRACK_ACTIONS from '../actions/track_actions.js';
class AppRouter extends React.Component{

  constructor(props){
    super(props);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);
    this.requestAllTracksOnEnter = this.requestAllTracksOnEnter.bind(this);
  }

  _redirectUnlessLoggedIn(nextState, replace){
    if (!this.props.currentUser) {
      replace('/');
    }
  }

  requestAllTracksOnEnter(){
    this.props.requestAllTracks();
  }


  render(){
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ AppContainer } >
          <IndexRoute component={ TracksIndexContainer }
                      onEnter={this.requestAllTracksOnEnter}/>
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

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(TRACK_ACTIONS.fetchAllTracks())
});


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
