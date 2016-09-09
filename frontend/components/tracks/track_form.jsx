import React from 'react';
import UploadImageButton from '../buttons/upload_image_button.jsx';
import UploadAudioButton from '../buttons/upload_audio_button.jsx';

const DEFAULT_IMAGE = 'assets/default_image.png';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      title: '',
      id: null,
      track_image_url: '',
      audio_url: '',
      track_file_name: '',
      category: ''
    };
    this.update = this.update.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }

  componentDidMount(){
    if(this.props.type === 'edit'){
      this.setState({
        artist: this.props.track.artist,
        title: this.props.track.title,
        id: this.props.track.id,
        track_image_url: this.props.track.track_image_url,
        audio_url: this.props.track.audio_url,
        track_file_name: this.props.track.track_file_name,
        category: this.props.track.category
      });
    }
  }

  updateImage(results){
    this.setState({track_image_url: results[0].url});
    document.querySelector('.curr-image img').src = results[0].url;
  }


  updateTrack(results){
    this.setState({audio_url: results[0].url, track_file_name: results[0].original_filename});
    const fileName = results[0].original_filename;
    const fileDisplay = fileName.length > 26 ? `${fileName.slice(0,23)}...` : fileName;
    document.querySelector('.audio-uploader span').innerHTML = fileDisplay;
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.clearErrors();
    this.props.processForm(this.state);
  }

  getErrors(){
    let errorsObj = {};
    if(this.props.errors){

      this.props.errors.forEach(err => {
        if(err.split(" ").includes("Title")){
          errorsObj['title'] = "Event can not be blank";
        } else if(err.split(" ").includes("Artist")){
          errorsObj['artist'] = ["Speaker"].concat(err.split(" ").slice(1)).join(' ');
        }
      });
    }
    return errorsObj;
  }


  update(key){
    return (e) => {
      this.setState({[key]: e.target.value});
    };
  }

  render(){
    const title = this.props.type === 'new' ? 'Add Speech' : 'Edit Speech';
    const errors = this.getErrors();

    return (
      <div className='track-form-div modal-form'>
        <div className='form-title'>{title}</div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-content' >
            <div className='image-upload'>
              <div className='curr-image'>
                <img src={this.state.track_image_url ? this.state.track_image_url : DEFAULT_IMAGE} />
                <UploadImageButton uploadImage={this.updateImage.bind(this)}/>
              </div>
            </div>
            <div className="none-image">
              <label htmlFor='artist'>Speaker</label>
              <input type='text'
                     id='artist'
                     className={(errors && errors['artist']) ? 'input-error' : ''}
                     name='artist'
                     value={this.state.artist}
                     onChange={this.update('artist')} />
              {errors['artist'] ? (<div className='error'>{errors['artist']}</div>) : ''}
               <label htmlFor='title'>Event</label>
               <input type='text'
                      id='title'
                      name='title'
                      className={(errors && errors['title']) ? 'input-error' : ''}
                      value={this.state.title}
                      onChange={this.update('title')} />
              {errors['title'] ? (<div className='error'>{errors['title']}</div>) : ''}

              <label htmlFor='category'>Category</label>
              <select value={this.state.category} onChange={this.update('category')} className='category-select form-control'>
                <option value="">Select a category</option>
                <option value="politics">Politics</option>
                <option value="history">History</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor='title'>Speech Audio</label>
              <UploadAudioButton uploadAudio={this.updateTrack.bind(this)}
                                 track={this.props.track}
              />
            </div>
          </div>
          <input type="submit"
            className='form-button'
            onClick={this.handleSubmit.bind(this)}
            value='Submit' />
        </form>
      </div>
    );
  }
}

export default TrackForm;
