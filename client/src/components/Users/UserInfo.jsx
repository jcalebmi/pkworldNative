import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
  }

  render () {
    return (
      <div className="info">
        <p>
          Search for other athletes or add your info to the user list.
          </p>
          <div>
            {this.auth.currentUser
              ? null
              : <span
                  className="seeMore signIn"
                  onClick={() => {this.props.changeFeed('Profile')}}>Sign in to join list.
                </span>}
          </div>
      </div>
    )
  }
}

export default UserInfo;