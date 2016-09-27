import React from 'react';

class QueueIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(){
    this.props.setQueuePosition(this.props.pos);
    this.props.setCurrentTrack(this.props.track);
  }

  render(){
    return (
      <li className='queue-idx-item' onClick={this.handleClick.bind(this)}>
        <span className='queue-artist'>{this.props.track ? this.props.track.artist : ''}:</span>
        <span className='queue-title'>{this.props.track ? this.props.track.title : ''}</span>
      </li>
    );
  }
}

export default QueueIndexItem;
