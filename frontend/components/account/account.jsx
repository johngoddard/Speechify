import React from 'react';
import {connect} from 'react-redux';
import UserForm from './user_form.jsx';
import UploadImageButton from '../buttons/upload_image_button.jsx';
import {updateCurrentUser} from '../../actions/session_actions.js'

const DEFAULT_IMAGE = 'http://res.cloudinary.com/dwf6beu4e/image/upload/v1472753244/images/ikpgc0g6ecz8fdz1lrda.png';


class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  getBioContent(){
    if(this.state.edit){
      return (
        <div className='bio-area'>
          <h5>User Bio</h5><a onClick={this.toggleEdit}>cancel</a>
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
      this.setState({edit: false});
    } else {
      this.setState({edit: true});
    }
  }

  updateImage(results){
    this.props.updateUser({profile_image_url: results[0].url, id: this.props.currentUser.id})
    document.querySelector('.profile-picture img').src = results[0].url;
  }

  render() {
    const image = this.props.currentUser.profile_image_url ? this.props.currentUser.profile_image_url : DEFAULT_IMAGE

    return (
      <div className='detail-info-container .account-info'>
        <section className='profile-picture'>
          <img src={image}/>
          <UploadImageButton uploadImage={this.updateImage.bind(this)} />
        </section>
        <section className='main-info profile-info'>
          <div className='info-container'>
            <h4>{this.props.currentUser.username}</h4>
            {this.getBioContent()}
          </div>

        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
