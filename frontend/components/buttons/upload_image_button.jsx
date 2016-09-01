import React from 'react';

class UploadImageButton extends React.Component {
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e){
    e.preventDefault();
    const uploadButton = this;
    cloudinary.openUploadWidget(CLOUDINARY_IMAGE_OPTIONS, (error, results) => {
      if(!error){
        uploadButton.props.uploadImage(results);
      }
    });
  }

  render(){
    return (
      <a className='upload-img-btn upload-btn' onClick={this.upload}>Change Image</a>
    );
  }
}

export default UploadImageButton;
