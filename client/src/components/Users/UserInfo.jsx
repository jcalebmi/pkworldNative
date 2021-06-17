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
          Use the search bar to find athletes by name or location and find their contact info.
          If you have allowed location services, the list will be sorted with athletes closest to you at the top.
          You can add yourself to the list if you would like other athletes to be able to find you.
        </p>
      </div>
    )
  }
}

export default UserInfo;