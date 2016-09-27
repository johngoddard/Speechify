import React from 'react';
import QueueIndexItemContainer from './queue_index_item_container.js';

class QueueIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  getQueueTracks(){
    const currentAudio = this.props.currentAudio;
    const trackDisplay = currentAudio.playQueue.map((track, idx) => {
      return (<QueueIndexItemContainer
                key={`${track ? track.title : 'no-name'}-${idx}`}
                track={track}
                pos={idx}/>);
    });
    return trackDisplay;
  }

  render(){
    return (
      <ul className="queue-list">
        {this.getQueueTracks()}
      </ul>
    );
  }
}

export default QueueIndex;
