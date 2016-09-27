import React from 'react';
import QueueIndexContainer from './queue_index_container.js';

class QueueControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    };
  }
  handleClick(){
    let newView = this.state.view ? false : true;
    this.setState({view: newView});
  }

  render(){
    return (
      <div className="queue-btn-cont" onClick={this.handleClick.bind(this)}>
        <span className='glyphicon glyphicon-th-list audio-queue-btn'></span>
        Play Queue
        <QueueIndexContainer />
      </div>
    );
  }
}

export default QueueControl;
