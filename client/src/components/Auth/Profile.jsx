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
            Name: {this.state.user.displayName}<br/>
            Email: {this.state.user.email}<br/>
            Phone: {this.state.user.phone}<br/>
            Facebook: {this.state.user.facebook}<br/>
            Youtube: {this.state.user.youtube}<br/>
            Twitter: {this.state.user.twitter}<br/>
            Instagram: {this.state.user.instagram}<br/>
            City: {this.state.user.city}<br/>
            State: {this.state.user.state}<br/>
            Country: {this.state.user.country}<br/>
          </p>
        </div>
      </div>
    )
  }
}

export default Profile;