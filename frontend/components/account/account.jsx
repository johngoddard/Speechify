import React from 'react';
import {connect} from 'react-redux';

class Account extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    return (
      <div className='account-info'>
        <section className='profile-picture'>
          <img src='http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjMzNzYwMjg2MjIw.jpg'/>
        </section>
        <section className='profile-info'>
          <h3>{this.props.currentUser.username}</h3>
          <h4>User Bio</h4>
          <a>edit</a>
          <div>{this.props.currentUser.description}</div>
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
