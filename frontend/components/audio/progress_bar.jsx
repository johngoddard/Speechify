import React from 'react';
import { formatTime } from '../../util/string_utils.js';


class ProgressBar extends React.Component {

  constructor(props){
    super(props);
  }

  handleClick(e){

    const end = document.documentElement.clientWidth;
    const position = Math.floor(this.props.duration*(e.clientX)/end);


    this.props.updatePosition(position);
  }

  render(){
    let position = this.props.position;
    let duration = this.props.duration;

    return (
      <div>
        <div className='progress-bar' onClick={this.handleClick.bind(this)}>
          <div className='audio-progress'
               style={{width: `${document.documentElement.clientWidth*(position/duration)}px`}}></div>
        </div>

      </div>
    );
  }
}


export default ProgressBar;
