import React from 'react';
import QueueIndexContainer from './queue_index_container.js';

class QueueControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    };
  }

  componentDidMount(){
    let control = this;

    $(document).mouseup(e => {
      if(control.state.view){
        let container = $('.queue-list');
        let list = $('.queue-btn-cont');


        if (!list.is(e.target)
           && list.has(e.target).length === 0
           && !container.is(e.currentTarget)) {
          control.setState({view: false});
        }
      }
    });
  }

  componentWillUnmount(){
    $(document).off('mouseup');
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.active){
      this.setState({view: false});
    }
  }

  handleClick(e){
    if(this.props.active){
      let newView = this.state.view ? false : true;
      e.stopPropagation();
      this.setState({view: newView});
    }
  }

  render(){
    return (
      <div className={`queue-btn-cont${this.props.active ? "" : " disabled"}`} onClick={this.handleClick.bind(this)}>
        <span className='glyphicon glyphicon-th-list audio-queue-btn'></span>
        Play Queue
        {this.state.view ? <QueueIndexContainer /> : ''}
      </div>
    );
  }
}

export default QueueControl;
