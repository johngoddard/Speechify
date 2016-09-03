import React from 'react';
import { connect } from 'react-redux';
import PlaylistsIndexItem from './playlists_index_item.jsx';
import * as ACTIONS from '../../actions/playlist_actions.js';


const mapStateToProps = state => ({
  followedPlaylists: state.playlists.followedPlaylists,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  followPlaylist: playlistId => dispatch(ACTIONS.followPlaylist(playlistId)),
  unfollowPlaylist: playlistId => dispatch(ACTIONS.unfollowPlaylist(playlistId))
});



export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsIndexItem);
