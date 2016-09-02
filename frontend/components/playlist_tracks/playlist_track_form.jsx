import React from 'react';

class PlaylistTrackForm extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    let playlists = this.props.playlists;
    return (
      <div className='modal-form'>
        <div className='form-title'>Add Track to Playlists</div>
        <ul>
          {Object.keys(playlists).map(id => <li>{playlists[id].title}</li>)}
        </ul>
        <a className='form-button'>Done</a>
      </div>
    );
  }
}

export default PlaylistTrackForm;
