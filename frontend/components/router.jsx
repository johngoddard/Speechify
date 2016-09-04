import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import AppContainer from './app/app_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import Account from './account/account.jsx';
import { connect } from 'react-redux';
import TracksIndexContainer from './tracks/tracks_index_container.js';
import PlaylistsIndexContainer from './playlist/playlists_index_container.js';
import PlaylistDetailContainer from './playlist/playlist_detail_container.js';
import * as TRACK_ACTIONS from '../actions/track_actions.js';
import * as PLAYLIST_ACTIONS from '../actions/playlist_actions.js';
import * as USER_ACTIONS from '../actions/user_actions.js';
import UserIndexContainer from '../components/user/user_index_container.js';
class AppRouter extends React.Component{

  constructor(props){
    super(props);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);
    this.requestAllTracksOnEnter = this.requestAllTracksOnEnter.bind(this);
    this.requestAllPlaylistsOnEnter = this.requestAllPlaylistsOnEnter.bind(this);
    this.requestAllUsersOnEnter = this.requestAllUsersOnEnter.bind(this);
    this.requestFollowedUsersOnEnter = this.requestFollowedUsersOnEnter.bind(this);
    this.requestUserTracksOnEnter = this.requestUserTracksOnEnter.bind(this);
    this.requestPlaylistDetail = this.requestPlaylistDetail.bind(this);

    this.routes =  (<Router history={ hashHistory }>
        <Route path='/' component={ AppContainer } >
          <IndexRoute component={ TracksIndexContainer }
                      onEnter={this.requestAllTracksOnEnter}
          />
        <Route path='/playlists'
                 component={ PlaylistsIndexContainer }
                 onEnter={this.requestAllPlaylistsOnEnter}/>
          <Route path='/account'
                 component={ Account }
                 onEnter={this._redirectUnlessLoggedIn}/>
          <Route path='/your-speeches'
                component={ TracksIndexContainer }
                onEnter={this.requestUserTracksOnEnter}
          />
        <Route path='/users'
                component={ UserIndexContainer }
                onEnter={this.requestAllUsersOnEnter}
          />
        <Route path='/followed-users'
                component={ UserIndexContainer }
                onEnter={this.requestFollowedUsersOnEnter}
          />
          <Route 	path="playlist/:playlistId"
  								component={PlaylistDetailContainer}
                  onEnter={this.requestPlaylistDetail} />
        </Route>
      </Router>);
  }


  requestPlaylistDetail(nextState){
    if(this.props.createdPlaylists[nextState.params.playlistId]){
      this.props.receivePlaylistDetail(this.props.createdPlaylists[nextState.params.playlistId]);
    } else{
      this.props.requestPlaylistDetail(nextState.params.playlistId);
    }
  }

  requestAllUsersOnEnter(){
    this.props.requestFollowedUsers();
    this.props.requestAllUsers();
  }

  requestFollowedUsersOnEnter(){
    this.props.requestFollowedUsers();
  }

  _redirectUnlessLoggedIn(nextState, replace){
    if (!this.props.currentUser) {
      replace('/');
      return true;
    }
    return false;
  }

  requestAllTracksOnEnter(){
    this.props.requestAllTracks();
  }

  requestAllPlaylistsOnEnter(){
    this.props.requestAllPlaylists();
  }

  requestUserTracksOnEnter(nextState, replace){
    if(!this._redirectUnlessLoggedIn(nextState, replace)){
      this.props.requestUserTracks();
    }
  }

  render(){
    const routes = this.routes;
    return (
      routes
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  createdPlaylists: state.playlists.createdPlaylists
});

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(TRACK_ACTIONS.fetchAllTracks(false)),
  requestUserTracks: () => dispatch(TRACK_ACTIONS.fetchAllTracks(true)),
  requestPlaylistDetail: id => dispatch(PLAYLIST_ACTIONS.fetchPlaylistDetail(id)),
  receivePlaylistDetail: playlist => dispatch(PLAYLIST_ACTIONS.receivePlaylistDetail(playlist)),
  requestAllPlaylists: () => dispatch(PLAYLIST_ACTIONS.fetchAllPlaylists()),
  requestAllUsers: () => dispatch(USER_ACTIONS.fetchAllUsers()),
  requestFollowedUsers: () => dispatch(USER_ACTIONS.fetchFollowedUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
