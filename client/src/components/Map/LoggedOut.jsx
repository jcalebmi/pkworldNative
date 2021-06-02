import React from 'react';

class LoggedOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="spotMarker">
        <h2 className="submitSpot">{this.props.selected.name || <span
        className="seeMore"
        onClick={() => this.props.changeFeed('Profile')}>Sign in to submit a spot.<br/>
        Click to sign in.</span>}</h2>
        <p className='bold underline'>{this.props.selected.address}</p>
        <p>{this.props.selected.description}</p>
        <p
          onClick={() => this.props.changeFeed('content', this.props.selected)}
          className="seeMore underline">Show Content?</p>
      </div>
    )
  }
}

export default LoggedOut;