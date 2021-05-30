import React from 'react';
import AddSpot from './AddSpot.jsx';
import EditSpot from './EditSpot.jsx';
import firebase from 'firebase';
import 'firebase/auth';

class LoggedIn extends React.Component {
  constructor(props) {
    super (props);
    this.auth = firebase.auth();
    this.state = {
      showEdit: false
    }
    this.showEdit = this.showEdit.bind(this);
  }

  showEdit () {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  render () {
    return (
      <div>
        {!this.state.showEdit
        ? <div>
            <h2 className="submitSpot">{this.props.selected.name || 'Submit Spot?'}</h2>
            <p>{this.props.selected.address}</p>
            <p>{this.props.selected.description}</p>
          </div>
          : <EditSpot
              setMarkers={this.props.setMarkers}
              selected={this.props.selected}
              temp={this.props.setTemp}
              close={this.props.setSelected}
              coordinates={{
                lat: this.props.selected.lat,
                lng: this.props.selected.lng
                }}/>}
        {this.auth.currentUser.email === this.props.selected.email && !this.state.showEdit
        ? <p onClick={this.showEdit}>Edit Spot?</p>
        : null}
        {this.props.selected.name ? null :
        <AddSpot
          setMarkers={this.props.setMarkers}
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