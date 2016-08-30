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
    this.toggle = this.toggle.bind(this);

    if(this.props.demo){
      this.startUsernameAnimation();
    }
  }

  startUsernameAnimation(){
    const demoName = 'DemoUser';
    let usernameID = setInterval(() => {
      document.getElementById('username').focus();
      let currLength = this.state.username.length;

      if(currLength < demoName.length){
        this.setState({username: this.state.username + demoName.slice(currLength, currLength + 1)});
      } else{
        clearInterval(usernameID);
        this.startPasswordAnimation();
      }
    }, 100);
  }

  startPasswordAnimation(){
    const demoPassword = 'password';
    let passwordID = setInterval(() => {
      document.getElementById('password').focus();
      let currLength = this.state.password.length;

      if(currLength < demoPassword.length){
        this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
      } else{
        clearInterval(passwordID);
        this.props.processForm(this.state);
      }
    }, 100);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
      this.props.closeModal();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.clearErrors();
    this.props.processForm(this.state);
  }

  update(key){
    return (e) => {this.setState({[key]: e.target.value});};
  }

  toggle(){
    this.props.clearErrors();
    this.props.toggleForm();
  }

  getAltText(){
    if (this.props.formType === 'login'){
      return (<div className='other-pop-text'>Dont have an account?
                <a onClick={this.toggle}>Sign up</a>
              </div>)
    } else {
      return (<div className='other-pop-text'>Already have an account?
                <a onClick={this.toggle}>Sign in</a>
              </div>)
    }
  }

  getErrors(){
    if(this.props.errors){
      let errorsObj = {};
      this.props.errors.forEach(err => {
        if(err.split(" ").includes("Username")){
          errorsObj['username'] = err;
        } else if(err.split(" ").includes("Password")){
          errorsObj['password'] = err;
        } else{
          errorsObj['credentials'] = err;
        }
      })

      return errorsObj;
    }
  }

  render(){
    const formTitle = (this.props.formType === 'login') ? 'Sign In' : 'Create Account';
    const errors = this.getErrors();

    return (
      <div className='session-form-div'>
        <div className='form-title'>{formTitle}</div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            {errors['credentials'] ? (<div className='error'>{errors['credentials']}</div>) : ''}
            <label htmlFor='username'>Username</label>
            <input type='text'
                   id='username'
                   className={(errors && errors['username']) ? 'input-error' : ''}
                   name='username'
                   value={this.state.username}
                   onChange={this.update('username')} />

          {errors['username'] ? (<div className='error'>{errors['username']}</div>) : ''}
          <label htmlFor='password'>Password</label>
          <input type='password'
                 id='password'
                 className={(errors && errors['password']) ? 'input-error' : ''}
                 name='password'
                 value={this.state.password}
                 onChange={this.update('password')} />

          {errors['password'] ? (<div className='error'>{errors['password']}</div>) : ''}
               <a className='session-button' onClick={this.handleSubmit.bind(this)}>Submit</a>
          {this.getAltText()}
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
