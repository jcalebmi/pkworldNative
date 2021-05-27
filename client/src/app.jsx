import React from 'react';
import ReactDOM from 'react-dom';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import firebase from 'firebase';
import 'firebase/auth';
import PKMap from './components/Map/PKMap.jsx';
import Home from './components/Home.jsx';
import Navigation from './components/Navigation.jsx';
import Users from './components/Users/Users.jsx';
import Events from './components/Events/Events.jsx';
import SignIn from './components/Auth/SignIn.jsx';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      feed: 'Map',
      location: {
        lat: 28.5383,
        lng: -81.3792
      },
    }
    this.auth = firebase.auth();
    this.changeFeed = this.changeFeed.bind(this);
    // this.setUser = this.setUser.bind(this);
  }

  // setUser (user) {
  //   this.setState({
  //     user: user
  //   })
  // }

  changeFeed (feed) {
    this.setState({
      feed: feed
    })
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }, () => null);
  }

  render () {
    return (
      <div id='pkworld'>
        <Navigation changeFeed={this.changeFeed}/>
        <div id="feed">
          {this.state.feed === 'Map'
            ? <PKMap
                location={this.state.location}/>
            :null}
          {this.state.feed === 'Users'
            ? <Users
                location={this.state.location}
                />
            :null}
          {this.state.feed === 'Events'
            ? <Events
                location={this.state.location}/>
            :null}
          {this.state.feed === 'Profile'
            ? <SignIn
                />
              :null }
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));