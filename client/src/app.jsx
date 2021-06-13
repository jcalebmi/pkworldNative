import React from 'react';
import ReactDOM from 'react-dom';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import axios from 'axios';
import PKMap from './components/Map/PKMap.jsx';
import Home from './components/Home.jsx';
import Navigation from './components/Navigation.jsx';
import Users from './components/Users/Users.jsx';
import Events from './components/Events/Events.jsx';
import SignIn from './components/Auth/SignIn.jsx';
import Content from './components/Map/Content.jsx';
import getLocations from './components/helpers/getLocations.js';
import stride from './assets/stride.png';
import trio from './assets/trio.png';
import air from './assets/Air.png';
import imax from './assets/imax.png';
import gareth from './assets/gareth.png';
import garethLay from './assets/garethlay.png';
import Rellax from 'rellax';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      feed: 'Map',
      spot: null,
      location: {
        lat: 28.5383,
        lng: -81.3792
      }
    }
    this.changeFeed = this.changeFeed.bind(this);
  }

  changeFeed (feed, spot) {
    this.setState({
      feed: feed,
      spot: spot
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
    // new Rellax('.stride', {
    //   speed: 10,
    //   center: false,
    //   wrapper: null,
    //   round: false,
    //   vertical: true,
    //   horizontal: false
    // })
    // new Rellax('.trio', {
    //   speed: 2,
    //   center: false,
    //   wrapper: null,
    //   round: false,
    //   vertical: true,
    //   horizontal: false
    // })
    // new Rellax('.air', {
    //   speed: -3,
    //   zindex: 5,
    //   center: false,
    //   wrapper: null,
    //   round: false,
    //   vertical: true,
    //   horizontal: false
    // })
    // new Rellax('.imax', {
    //   speed: -10,
    //   center: false,
    //   wrapper: null,
    //   round: false,
    //   vertical: true,
    //   horizontal: false
    // })
    // new Rellax('.gareth', {
    //   speed: 5,
    //   center: false,
    //   wrapper: null,
    //   round: false,
    //   vertical: true,
    //   horizontal: true
    // })
    // new Rellax('.garethLay', {
    //   speed: 9,
    //   center: false,
    //   wrapper: null,
    //   round: false,
    //   vertical: true,
    //   horizontal: false
    // })
  }

  render () {
    return (
      <div id='pkworld'>
        {/* <img className="rellax stride" src={stride} />
        <img className="rellax trio" src={trio} />
        <img className="rellax air" src={air} />
        <img className="rellax imax" src={imax} />
        <img className="rellax garethLay" src={garethLay} /> */}
        <Navigation changeFeed={this.changeFeed}/>
        <div id="feed">
          {this.state.feed === 'Home'
            ? <Home changeFeed={this.changeFeed}/>
            : null}
          {this.state.feed === 'Map'
            ? <PKMap
                location={this.state.location}
                changeFeed={this.changeFeed}/>
            :null}
          {this.state.feed === 'Users'
            ? <Users
                location={this.state.location}
                changeFeed={this.changeFeed}
                />
            :null}
          {this.state.feed === 'Events'
            ? <Events
                location={this.state.location}
                changeFeed={this.changeFeed}/>
            :null}
          {this.state.feed === 'Profile'
            ? <SignIn
                />
              :null }
          {this.state.feed === 'content'
            ? <Content spot={this.state.spot}/>
            :null}
        </div>
        {this.state.feed !== 'Home'
          ? <footer>
              <a
              style={{color: 'white'}}
              href="mailto:calebiuliano@gmail.com">Developed by Caleb Iuliano</a>
            </footer>
          : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));