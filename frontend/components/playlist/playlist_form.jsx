import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.getTitle = this.getTitle.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const id = this.props.playlist ? this.props.playlist.id : '';
    const toSubmit = Object.assign({}, this.state, {id: id});
    this.props.processForm(toSubmit);
  }

  componentDidMount(){
    if(this.props.type === 'edit'){
      this.setState({
        description: this.props.playlist.description,
        title: this.props.playlist.title
      });
    }
  }

  update(key){
    return (e) => {this.setState({[key]: e.target.value});};
  }

  getErrors(){
    if(this.props.errors){
      let errorsObj = {};
      this.props.errors.forEach(err => {
        if(err.split(" ").includes("Title")){
          errorsObj['title'] = err;
        } else if(err.split(" ").includes("Description")){
          errorsObj['description'] = err;
        }
      });
      return errorsObj;
    }
  }

  getTitle(){
    if(this.props.type === 'new'){
      return (<div className='form-title'>Add Playlist</div>);
    }
  }

  render(){
    const errors = this.getErrors();
    return (
      <div className={
          (this.props.type === 'edit') ? 'inline-form playlist-edit' :
           'playlist-form-div modal-form'}>
        {this.getTitle()}
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label htmlFor='title'>Title</label>
          <input type='text'
                 id='title'
                 name='title'
                 className={(errors && errors['title']) ? 'input-error' : ''}
                 value={this.state.title}
                 onChange={this.update('title')} />
          {errors['title'] ? (<div className='error'>{errors['title']}</div>) : ''}
          <label htmlFor='description'>Description</label>
          <textarea onChange={this.update('description')}
                    className={(errors && errors['description']) ? 'input-error' : ''}
                    id='description'
                    value={this.state.description}>
          </textarea>
          {errors['description'] ? (<div className='error'>{errors['description']}</div>) : ''}
          <input type="submit"
                 className='form-button'
                 value='Submit' />
        </form>
      </div>
    );
  }
}

export default PlaylistForm;
