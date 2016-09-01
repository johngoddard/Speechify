import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      title: '',
      id: null
    };
    this.update = this.update.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }

  componentDidMount(){
    if(this.props.type === 'edit'){
      this.setState({artist: this.props.track.artist, title: this.props.track.title, id: this.props.track.id});
    }
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
          errorsObj['artist'] = "Speaker can not be blank";
        }
      })
    }
    return errorsObj;
  }


  update(key){
    return (e) => {this.setState({[key]: e.target.value});};
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
                <input type="file"  />
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
              <label htmlFor='title'>Speech Audio</label>
              <input type="file" />
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
