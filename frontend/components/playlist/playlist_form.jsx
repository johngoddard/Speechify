import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(key){
    return (e) => {this.setState({[key]: e.target.value});};
  }

  render(){
    return (
      <div className='playlist-form-div modal-form'>
        <div className='form-title'>Add Playlist</div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor='title'>Title</label>
          <input type='text'
                 id='title'
                 name='title'
                 value={this.state.title}
                 onChange={this.update('title')} />

          <label htmlFor='description'>Description</label>
          <textarea onChange={this.update('description')}
                    id='description'
                    value={this.state.description}>
          </textarea>
          <input type="submit"
                 className='form-button'
                 value='Submit' />
        </form>
      </div>
    );
  }
}

export default PlaylistForm;
