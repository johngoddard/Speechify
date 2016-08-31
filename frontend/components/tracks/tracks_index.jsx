import React from 'react';

class TracksIndex extends React.Component {
  render(){
    const tracks = this.props.tracks;
    return (
      <ul>
        {Object.keys(tracks).map(idx => <li key={`${tracks[idx].title}${tracks[idx].id}`}>{tracks[idx].title}</li>)}
      </ul>
    );
  }
}

export default TracksIndex;
