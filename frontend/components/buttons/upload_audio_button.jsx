import React from 'react';

class UploadAudioButton extends React.Component {
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
    this.getFileDisplay = this.getFileDisplay.bind(this);
  }

  upload(e){
    e.preventDefault();
    const uploadButton = this;
    cloudinary.openUploadWidget(CLOUDINARY_AUDIO_OPTIONS, (error, results) => {
      if(!error){
        uploadButton.props.uploadAudio(results);
      }
    });
  }

  getFileDisplay(){
    if(this.props.track && this.props.track.track_file_name){
      let fileName = this.props.track.track_file_name;
      let displayName = fileName.length > 26 ? `${fileName.slice(0,23)}...` : fileName;
      return displayName;
    }
  }

  render(){


    return (
      <div className='audio-uploader'>
        <a className='upload-audio-btn upload-btn' onClick={this.upload}>Upload Audio</a>
        <span className='file-name'>{this.getFileDisplay()}</span>
      </div>
    );
  }
}

export default UploadAudioButton;
