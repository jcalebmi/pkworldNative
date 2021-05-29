import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';


class MapInfo extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
  }

  render () {
    return (
      <div className="info">
        <p>
          Search for places to train by address or by spot name. If you know the name of a spot you can search by name and see if it has been added to the map.
          <br />
        </p>
        <div>
          {this.auth.currentUser
            ? null
            : <span
                className="seeMore signIn"
                onClick={() => {this.props.changeFeed('Profile')}}>Sign in to add spots.
             </span>}
        </div>
      </div>
    )
  }
}

export default MapInfo;