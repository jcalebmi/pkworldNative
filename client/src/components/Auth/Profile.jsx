import React from 'react';
import getUserInfo from './helpers/getUserInfo.js';
import firebase from 'firebase';
import 'firebase/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
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
      <div>
        <div className="userInfo">
          <div className="profilePic">
            <h3>{this.auth.currentUser.displayName}</h3>
            <img className="profilePic" src={this.auth.currentUser.photoURL}></img>
          </div>
          {!this.state.user
          ? null
          : <div className="contentContainer">
              <div className="contents">
                <span><h3 className="underline bold">City:</h3> {this.state.user.city}</span><br></br>
                <span><h3 className="underline bold">State:</h3> {this.state.user.state}</span><br></br>
                <span><h3 className="underline bold">Country:</h3> {this.state.user.country}</span><br/>
                <span><h3 className="underline bold">Email:</h3> {this.state.user.email}</span><br></br>
                <span><h3 className="underline bold">Phone:</h3> {this.state.user.phone}</span><br/>
                <span><h3 className="underline bold">Hosts Athletes:</h3> <br/>{this.state.user.host
                  ? <img src={yes} style={{width: '5vw', height:'auto'}}/>
                  : <img src={no} style={{width: '5vw', height:'auto'}}/>}</span>
              </div>
            </div>}
          </div>
          {this.state.user ?
          <div className="socialMedia">
            <a href={this.state.user.youtube || null}
              className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
            <a href={this.state.user.facebook || null}
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a href={this.state.user.twitter || null} className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a href={this.state.user.instagram || null}
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a><br/>
          </div> : null}
        {this.auth.currentUser && this.state.user && this.state.user.email === this.auth.currentUser.email
          ? <div id="deleteLi">
              <div></div>
              <span
              className="seeMore deleteLi"
              onClick={()=> this.state.showEditModal(this.state.user)}
              >Edit Info?</span>
            </div>
            : null}
    </div>

    )
  }
}

export default Profile;