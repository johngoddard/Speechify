import React from 'react';
import { formatTime } from '../../util/string_utils.js';

const EL_WIDTH = 350;

class ProgressBar extends React.Component {

  constructor(props){
    super(props);
  }

  handleClick(e){

    const start = document.getElementsByClassName('progress-bar')[0].getBoundingClientRect().left;
    const position = Math.floor(this.props.duration*(e.clientX - start)/EL_WIDTH);


    this.props.updatePosition(position);
  }

  render(){
    let position = this.props.position;
    let duration = this.props.duration;

    return (
      <div>
        <div className='progress-bar' onClick={this.handleClick.bind(this)}>
          <div className='audio-progress'
               style={{width: `${EL_WIDTH*(position/duration)}px`}}></div>
        </div>
        <span className='progress-time'>
          {formatTime(position)} / {formatTime(duration)}
        </span>
      </div>
    );
  }
}

export default ProgressBar;
