import React from 'react';
import getUserInfo from './helpers/getUserInfo.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
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
          <p>
            <span className="bold underline">Name:</span> {this.state.user.displayName}<br/>
            <span className="bold underline">Email:</span> {this.state.user.email}<br/>
            <span className="bold underline">Phone:</span> {this.state.user.phone}<br/>
            <span className="bold underline">Facebook:</span> {this.state.user.facebook}<br/>
            <span className="bold underline">Youtube:</span> {this.state.user.youtube}<br/>
            <span className="bold underline">Twitter:</span> {this.state.user.twitter}<br/>
            <span className="bold underline">Instagram:</span> {this.state.user.instagram}<br/>
            <span className="bold underline">City:</span> {this.state.user.city}<br/>
            <span className="bold underline">State:</span> {this.state.user.state}<br/>
            <span className="bold underline">Country:</span> {this.state.user.country}<br/>
          </p>
        </div>
      </div>
    )
  }
}

export default Profile;