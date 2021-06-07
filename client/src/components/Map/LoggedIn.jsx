import React from 'react';
import AddSpot from './AddSpot.jsx';
import EditSpot from './EditSpot.jsx';
import firebase from 'firebase';
import 'firebase/auth';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <div id="spotMarker">
        {!this.state.showEdit
        ? <div>
            <h2 className="submitSpot">{this.props.selected.name || 'Submit Spot?'}</h2>
            <p className='bold underline'>{this.props.selected.address}</p>
            <p>{this.props.selected.description}</p>
              {this.props.selected.photos
                ? <div id="markerContent">
                  <Carousel showThumbs={false}>
                    {this.props.selected.photos.map((photo, index) =>
                    <div key={index}>
                      <img src={photo} />
                    </div>)}
                  </Carousel>
                </div>
                : null }
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
        {this.props.selected.name && !this.state.showEdit
        ? <p
          onClick={() => this.props.changeFeed('content', this.props.selected)}
          className="seeMore underline">Show Content?</p>
          : null}
        {this.auth.currentUser.providerData[0].email === this.props.selected.email && !this.state.showEdit
        ? <p
            className="seeMore underline"
            onClick={this.showEdit}><span> | </span>Edit Spot?</p>
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