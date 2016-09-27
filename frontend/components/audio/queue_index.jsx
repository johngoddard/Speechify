import React from 'react';

class QueueIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  getQueueTracks(){
    const currentAudio = this.props.currentAudio;
    console.log(currentAudio);
    const tracks = currentAudio.playedTracks.concat([currentAudio.track], currentAudio.playQueue);
    const trackDisplay = tracks.map((track, idx) => (
      <li className='queue-idx-item' key={`${track ? track.title : 'no-name'}-${idx}`}>
        <span className='queue-artist'>{track ? track.artist : ''}</span>
        <span className='queue-artist'>{track ? track.title : ''}</span>
      </li>
    ));

    return trackDisplay;
  }

  render(){
    return (
      <ul className="QueueList">
        {this.getQueueTracks()}
      </ul>
    );
  }
}

export default QueueIndex;
