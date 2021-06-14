import React from 'react';
import stride from '../assets/stride.png';
import trio from '../assets/trio.png';
import air from '../assets/Air.png';
import imax from '../assets/imax.png';
import gareth from '../assets/gareth.png';
import garethLay from '../assets/garethlay.png';
import Rellax from 'rellax';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    new Rellax('.stride', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: 10,
      center: true,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
    new Rellax('.trio', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: 3,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
    new Rellax('.air', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: -3,
      zindex: 5,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
    new Rellax('.imax', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: -15,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
    new Rellax('.gareth', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: 5,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: true
    })
    new Rellax('.garethLay', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: 9,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
    new Rellax('.spots', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: -4,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
    new Rellax('.athletes', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: -5,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
    new Rellax('.events', {
      breakpoints: [200, 480, 576, 768, 1201],
      speed: -8,
      center: false,
      wrapper: '.body',
      round: false,
      vertical: true,
      horizontal: false
    })
  }

  render () {
    return (
      <div id="home" className="home">
        <h1 className="spots seeMore" onClick={() => this.props.changeFeed('Map')}>Find and Share Spots</h1>
        <h1 className="athletes seeMore" onClick={() => this.props.changeFeed('Users')}>Find Other Athletes</h1>
        <h1 className="events seeMore" onClick={() => this.props.changeFeed('Events')}>Find and Share Events</h1>
        <img className="rellax stride" src={stride} />
        <img className="rellax trio" src={trio} />
        <img className="rellax air" src={air} />
        <img className="rellax imax" src={imax} />
        <img className="rellax garethLay" src={garethLay} />
      </div>
    )
  }
}

export default Home;

