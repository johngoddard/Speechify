import React from 'react';
import Sound from 'react-sound';
import AudioDisplay from './audio_display.jsx';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: Sound.status.STOPPED
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentTrack.playing){
      this.playTrack();
    } else {
      this.pauseTrack();
    }
  }

  playTrack(){
    this.setState({playStatus: Sound.status.PLAYING});
  }

  pauseTrack(){
    this.setState({playStatus: Sound.status.PAUSED});
  }

  getPlayButton(){
    if(this.state.playStatus === Sound.status.PLAYING ){
      return (
        <a className='play-button glyphicon glyphicon-pause' onClick={this.pauseTrack.bind(this)}></a>
      );
    } else {
      return (
        <a className='play-button glyphicon glyphicon-play' onClick={this.playTrack.bind(this)}></a>
      );
    }
  }

  getSound(){
    if(this.props.currentTrack.track.audio_url &&
      (this.state.playStatus === Sound.status.PLAYING || this.state.playStatus === Sound.status.PAUSED)){

      return (
        <Sound
          url={this.props.currentTrack.track.audio_url}
          playStatus={this.state.playStatus}
        />
    );
    }
  }

  getCurrTrackDisplay(){
    if(this.props.currentTrack.track.title){
      return (<AudioDisplay track={this.props.currentTrack.track} />);
    }
  }

  render(){
    const hiddenClass = (this.state.playStatus === Sound.status.STOPPED) ? 'hidden' : 'visible';

    return(
      <section className={`audio-player ${hiddenClass}`}>
        <div className='display-wrapper'>
          {this.getCurrTrackDisplay()}
        </div>
        <div className='audio-controls'>
          {this.getPlayButton()}
        </div>
        {this.getSound()}
    </section>
  );
  }
}

export default AudioPlayer;
