import React from 'react';
import { connect } from 'react-redux';
import PlaylistsIndex from './playlists_index.jsx';

const mapStateToProps = (state) => ({
  playlists: state.playlists.allPlaylists
});

export default connect(mapStateToProps)(PlaylistsIndex);
