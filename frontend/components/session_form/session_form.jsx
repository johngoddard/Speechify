import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.getAltText = this.getAltText.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
      this.props.closeModal();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(key){
    return (e) => {this.setState({[key]: e.target.value});};
  }

  getAltText(){
    if (this.props.formType === 'login'){
      return (<div>Dont have an account?
                <a onClick={this.props.toggleForm}>Sign up</a>
              </div>)
    } else {
      return (<div>Already have an account?
                <a onClick={this.props.toggleForm}>Sign in</a>
              </div>)
    }
  }

  render(){
    const formTitle = (this.props.formType === 'login') ? 'Sign In!' : 'Sign Up!';
    const altText = this.getAltText();

    return (
      <div className='session-form-div'>
        <h3 className='form-title'>{formTitle}</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor='username'>Username:</label>
            <input type='text'
                   name='username'
                   value={this.state.username}
                   onChange={this.update('username')} />

          <label htmlFor='password'>Password:</label>
          <input type='password'
                 name='password'
                 value={this.state.password}
                 onChange={this.update('password')} />

          <button>Submit</button>
        </form>

        {altText}
      </div>
    );
  }
}

export default withRouter(SessionForm);
