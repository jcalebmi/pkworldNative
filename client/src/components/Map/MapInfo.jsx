import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import SearchLocations from './SearchLocations.jsx';
import SearchSpots from './SearchSpots.jsx';


class MapInfo extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
  }

  render () {
    return (
      <div className="info">
        <p>
          Search for places to train by address or by spot name. If you know the name of a spot you can search by name and see if it has been added to the map.
          <br />
        </p>
        <div>
          {this.auth.currentUser
            ? null
            : <span
                className="seeMore signIn"
                onClick={() => {this.props.changeFeed('Profile')}}>Sign in to add spots.
             </span>}
        </div>
        <div className="search">
          <div></div>
          <div>
            <select value={this.props.searching} onChange={this.props.onChange}>
              <option value='Locations'>Locations</option>
              <option value="Spots">Spots</option>
            </select>
            {this.props.searching === 'Locations'
            ? <SearchLocations
            usePlaces={this.props.usePlaces}
            getGeocode={this.props.getGeocode}
            getLatLng={this.props.getLatLng}
            panTo={this.props.panTo}
            location={this.props.location}/>
            : <SearchSpots
                panTo={this.props.panTo}
                markers={this.props.markers}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default MapInfo;