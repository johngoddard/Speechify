import React from 'react';
import {connect} from 'react-redux';
import UserForm from './user_form.jsx';

class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  getBioContent(){
    if(this.state.edit){
      return (
        <div className='bio-area'>
          <h4>User Bio</h4>
          <UserForm toggleForm={this.toggleEdit}/>
        </div>
      )
    } else {
      return (
        <div className='bio-area'>
          <h4>User Bio</h4>
          <a onClick={this.toggleEdit}>edit</a>
          <div className='user-desc'>{this.props.currentUser.description}</div>
        </div>
      )
    }
  }

  toggleEdit(){
    if(this.state.edit){
      this.setState({edit: false})
    } else {
      this.setState({edit: true})
    }
  }

  render() {
    return (
      <div className='account-info'>
        <section className='profile-picture'>
          <img src='http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjMzNzYwMjg2MjIw.jpg'/>
        </section>
        <section className='profile-info'>
          <h3>{this.props.currentUser.username}</h3>
          {this.getBioContent()}
          <h4>Playlists</h4>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(Account);
