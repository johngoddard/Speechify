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
    const demoName = 'demo';
    let usernameID = setInterval(() => {
      let currLength = this.state.username.length;

      if(currLength < demoName.length){
        this.setState({username: this.state.username + demoName.slice(currLength, currLength + 1)});
      } else{
        clearInterval(usernameID);
        this.startPasswordAnimation();
      }
    }, 50);
  }

  startPasswordAnimation(){
    const demoPassword = 'password';
    let passwordID = setInterval(() => {
      let currLength = this.state.password.length;

      if(currLength < demoPassword.length){
        this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
      } else{
        clearInterval(passwordID);
        this.props.processForm(this.state);
      }
    }, 50);
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

  toggle(){
    this.props.clearErrors();
    this.props.toggleForm();
  }

  getAltText(){
    if (this.props.formType === 'login'){
      return (<div>Dont have an account?
                <a onClick={this.toggle}>Sign up</a>
              </div>)
    } else {
      return (<div>Already have an account?
                <a onClick={this.toggle}>Sign in</a>
              </div>)
    }
  }

  getErrors(){
    if(this.props.errors){
      return (
        <ul>
          {this.props.errors.map(e => <li key={e}>{e}</li>)}
        </ul>
      );
    }
  }

  render(){
    const formTitle = (this.props.formType === 'login') ? 'Sign In!' : 'Sign Up!';

    return (
      <div className='session-form-div'>
        <h3 className='form-title'>{formTitle}</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            {this.getErrors()}
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

        {this.getAltText()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
