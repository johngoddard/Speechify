import React from 'react';
import QueueIndexContainer from './queue_index_container.js';

class QueueControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    };
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.active){
      this.setState({view: false});
    }
  }

  handleClick(){
    if(this.props.active){
      let newView = this.state.view ? false : true;
      this.setState({view: newView});
    }
  }

  render(){
    return (
      <div className={`queue-btn-cont${this.props.active ? "" : " disabled"}`} onClick={this.handleClick.bind(this)}>
        <span className='glyphicon glyphicon-th-list audio-queue-btn'></span>
        Up Next
        {this.state.view ? <QueueIndexContainer /> : ''}
      </div>
    );
  }
}

export default QueueControl;
