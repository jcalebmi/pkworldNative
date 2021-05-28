import React from 'react';
import AddSpot from './AddSpot.jsx';

class LoggedIn extends React.Component {
  constructor(props) {
    super (props)
  }

  render () {
    return (
      <div>
        <h2 className="submitSpot">{this.props.selected.name || 'Submit Spot?'}</h2>
        <p>{this.props.selected.description}</p>
        <p>{this.props.selected.address}</p>
        {this.props.selected.name ? null :
        <AddSpot
          temp={this.props.setTemp}
          close={this.props.setSelected}
          coordinates={{
            lat: this.props.selected.lat,
            lng: this.props.selected.lng
            }}/>}
      </div>
    )
  }
}
export default LoggedIn;