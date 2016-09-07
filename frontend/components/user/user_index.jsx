import React from 'react';
import UserIndexItemContainer from './user_index_item_container.js';

class UserIndex extends React.Component {
  constructor(props){
    super(props);

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(){
    let location = window.location.hash;
    location = location.split('?')[0];
    if(location == '#/app/users'){
      let followMap = {};

      this.props.followedUsers.forEach(user => {
        followMap[user.id] = true;
      });

      let notFollowed = this.props.users.filter(user => {
        return !(followMap[user.id] || user.id === this.props.currentUser.id);
      });

      return notFollowed.sort((u1, u2) => {
        return u2.followers - u1.followers;
      });
    }
    else {
      return this.props.followedUsers.sort((u1, u2) => {
        return Date.parse(u2.follow_date) - Date.parse(u1.follow_date);
      });
    }
  }

  getPageTitle(){
    let location = window.location.hash;
    location = location.split('?')[0];
    return (location === '#/app/users') ? 'Find Friends' : 'Users You Follow';
  }

  render(){
    return (
      <section className='tracks-index-page index-page'>
        <h3>{this.getPageTitle()}</h3>
        <div className='info-container users-list'>
          <ul>
            {this.getUsers().map(user => (
              <UserIndexItemContainer user={user}  key={`${user.id}${user.username}}`} />
              )
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default UserIndex;
