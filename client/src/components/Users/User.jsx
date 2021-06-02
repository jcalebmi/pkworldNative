import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
  }

  render () {
    return (
      <li className="user dataLists">
          <div>
            <div className="userInfo">
              <div>
                <h3>{this.props.user.displayName}</h3>
                <img src={this.props.user.pic}></img>
              </div>
              <div className="contentContainer">
                <div className="contents">
                  <span>City: {this.props.user.city}</span><br></br>
                  <span>State: {this.props.user.state}</span><br></br>
                  <span>Country: {this.props.user.country}</span><br/>
                  <span>Email: {this.props.user.email}</span><br></br>
                  <span>Phone: {this.props.user.phone}</span>
                </div>
              </div>
            </div>
            <div className="socialMedia">
              <a href={this.props.user.youtube}
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>
              <a href={this.props.user.facebook}
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
              <a href={this.props.user.twitter} className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
              <a href={this.props.user.instagram}
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </a><br/>
            </div>
            {this.auth.currentUser && this.props.user.email === this.auth.currentUser.email
              ? <div id="deleteLi">
                  <div></div>
                  <span
                  className="seeMore deleteLi"
                  onClick={()=> this.props.showEditModal(this.props.user)}
                  >Edit Info?</span>
                </div>
                : null}
          </div>
      </li>
    )
  }
}

export default User;