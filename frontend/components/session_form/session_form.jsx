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
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
      this.props.router.push('/');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(key){
    return (e) => {this.setState({[key]: e.target.value});};
  }

  render(){
    const formTitle = (this.props.formType === 'login') ? 'Sign In!' : 'Sign Up!';
    const altText = (this.props.formType === 'login') ? 'Sign Up' : 'Sign In';
    const altLink = (this.props.formType === 'login') ? 'signup' : 'login';

    return (
      <div className='session-form-div'>
        <h2>{formTitle}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type='text'
                   value={this.state.username}
                   onChange={this.update('username')} />
          </label>

          <label>Password:
            <input type='password'
                   value={this.state.password}
                   onChange={this.update('password')} />
          </label>

          <button>Submit</button>
        </form>

        <a href={`#/${altLink}`}>{altText}</a>
      </div>
    );
  }
}

export default withRouter(SessionForm);
