import React from 'react';
import getUserInfo from './helpers/getUserInfo.js';
import firebase from 'firebase';
import 'firebase/auth';
import no from './assets/Boton-mal.svg';
import yes from './assets/dwcheckyes.svg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      user: {}
    }
  }
  componentDidMount () {
    getUserInfo(this.props.user.email)
    .then(data => this.setState({
      user: data
    }))
  }

  render () {
    return (
      <div className="userInfoContainer">
        <div className="userInfo">

            <h3 className="bold underline">Name:</h3> {this.auth.currentUser.displayName}<br/>
            <h3 className="bold underline">Email:</h3> {this.auth.currentUser.email}<br/>
            {this.state.user
            ?<div>
                <h3 className="bold underline">Phone:</h3> {this.state.user.phone}<br/>
                <h3 className="bold underline">Facebook:</h3> {this.state.user.facebook}<br/>
                <h3 className="bold underline">Youtube:</h3> {this.state.user.youtube}<br/>
                <h3 className="bold underline">Twitter:</h3> {this.state.user.twitter}<br/>
                <h3 className="bold underline">Instagram:</h3> {this.state.user.instagram}<br/>
                <h3 className="bold underline">City:</h3> {this.state.user.city}<br/>
                <h3 className="bold underline">State:</h3> {this.state.user.state}<br/>
                <h3 className="bold underline">Country:</h3> {this.state.user.country}<br/>
                <h3 className="bold underline">Hosts Athletes:</h3><br/>
                {this.state.user.host
                  ? <img src={yes} style={{width: '5vw', height:'auto'}}/>
                  : <img src={no} style={{width: '5vw', height:'auto'}}/>}
            </div>
              : null}
        </div>
        <div className="profilePic">
          <img className="profilePic" src={this.auth.currentUser.photoURL} />
        </div>
      </div>
    )
  }
}

export default Profile;