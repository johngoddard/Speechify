import React from 'react';
import Sound from 'react-sound';
import AudioDisplay from './audio_display.jsx';
import ProgressBar from './progress_bar.jsx';
import { formatTime } from '../../util/string_utils.js';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: Sound.status.STOPPED,
      position: 0,
      duration: 0
    };

    this.getCurrTrackDisplay = this.getCurrTrackDisplay.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentTrack.playing){
      this.playTrack();
    } else {
      this.pauseTrack();
    }

    let track = this.props.currentTrack.track;

    if(track && track.id && nextProps.currentTrack.track.id !== track.id){
      this.setState({position: 0});
    }
  }

  playTrack(){
    this.setState({playStatus: Sound.status.PLAYING});
  }

  pauseTrack(){
    this.setState({playStatus: Sound.status.PAUSED});
  }

  updatePosition(position){
    this.setState({position: position});
  }

  getPlayButton(){
    if(this.state.playStatus === Sound.status.PLAYING ){
      return (
        <a className='pause-btn glyphicon glyphicon-pause audio-btn' onClick={this.pauseTrack.bind(this)}></a>
      );
    } else {
      return (
        <a className='play-btn glyphicon glyphicon-play audio-btn' onClick={this.playTrack.bind(this)}></a>
      );
    }
  }

  playAudio(playInfo){
    this.setState({position: playInfo.position});
    this.setState({duration: playInfo.duration});
  };

  getSound(){
    if(this.props.currentTrack.track.audio_url &&
      (this.state.playStatus === Sound.status.PLAYING || this.state.playStatus === Sound.status.PAUSED)){

      return (
        <Sound
          url={this.props.currentTrack.track.audio_url}
          playStatus={this.state.playStatus}
          position={this.state.position}
          onPlaying={this.playAudio.bind(this)}
          onFinishedPlaying={this.goForward.bind(this)}
        />
    );
    }
  }

  getCurrTrackDisplay(){
    if(this.props.currentTrack.track.title){
      return (<AudioDisplay track={this.props.currentTrack.track} />);
    }
  }

  goBack(){
    if(this.state.position < 3000 && this.props.currentTrack.playedTracks.length > 0){
      this.props.goBack();
    } else if(this.state.position < 3000){
      this.setState({position: 0});
      this.pauseTrack();
    } else{
      this.setState({position: 0});
    }
  }

  goForward(){
    if(this.props.currentTrack.playQueue.length > 0){
      this.props.goForward();
    }
  }

  render(){
    const hiddenClass = (this.state.playStatus === Sound.status.STOPPED) ? 'hidden' : 'visible';
    const forwardable = this.props.currentTrack.playQueue.length > 0;

    return(
      <section className={`audio-player ${hiddenClass}`}>
        <div className='display-wrapper'>
          {this.getCurrTrackDisplay()}
        </div>
        <div className='progress-time'>
          {formatTime(this.state.position)} / {formatTime(this.state.duration)}
        </div>
        <div className='audio-progress-bar'>
          <ProgressBar
            position={this.state.position}
            duration={this.state.duration}
            updatePosition={this.updatePosition.bind(this)}
          />
        </div>
        <div className='audio-controls'>
          <a className='glyphicon glyphicon-backward audio-btn'
            onClick={this.goBack.bind(this)}></a>
          {this.getPlayButton()}
          <a className={`glyphicon glyphicon-forward audio-btn${forwardable ? '' : ' disabled'}`}
             onClick={this.goForward.bind(this)}></a>
        </div>
        {this.getSound()}
    </section>
  );
  }
}

export default AudioPlayer;
