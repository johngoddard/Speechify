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
          <h5>User Bio</h5>
          <UserForm toggleForm={this.toggleEdit}/>
        </div>
      )
    } else {
      return (
        <div className='bio-area'>
          <h5>User Bio</h5>
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
          <div className='info-container'>
            <h4>{this.props.currentUser.username}</h4>
            {this.getBioContent()}
          </div>

          <div className='info-container'>
            <h5>Playlists</h5>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(Account);
