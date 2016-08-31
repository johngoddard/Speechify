import React from 'react';
import { connect } from 'react-redux';
import * as SESSION_ACTIONS from '../../actions/session_actions.js';

class BioForm extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      newBio: this.props.currentUser.description
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const updatedUser = {
      id: this.props.currentUser.id,
      description: this.state.newBio
    }
    this.props.updateUser(updatedUser);
    this.props.toggleForm()
  }

  updateBio(e){
    this.setState({newBio: e.target.value});
  }

  render(){
    return (
      <form className="bioForm">
        <textArea className='bio-edit'
                  value={this.state.newBio}
                  onChange={this.updateBio}></textArea>
        <a onClick={this.handleSubmit}>Submit Changes</a>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(SESSION_ACTIONS.updateCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(BioForm);
