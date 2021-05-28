import React from 'react';

class LoggedOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h2 className="submitSpot">{this.props.selected.name || <span
        className="seeMore"
        onClick={() => this.props.changeFeed('Profile')}>Sign in to submit a spot.<br/>
        Click to sign in.</span>}</h2>
        <p>{this.props.selected.description}</p>
        <p>{this.props.selected.address}</p>
      </div>
    )
  }
}

export default LoggedOut;