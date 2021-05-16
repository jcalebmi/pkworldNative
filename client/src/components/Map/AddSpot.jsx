import React from 'react';
import createSpot from './helpers/createSpot.js';

class AddSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Spot Name',
      video: 'Video URL',
      gym: null
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault();
    let spot;
    if (this.state.video === 'Video URL') {
      spot = {
        name: this.state.name,
        lat: this.props.coordinates.lat,
        lng: this.props.coordinates.lng,
        gym: this.state.gym
      }
    } else {
      spot = {
        name: this.state.name,
        lat: this.props.coordinates.lat,
        lng: this.props.coordinates.lng,
        gym: this.state.gym,
        video: video
      }
    }
    console.log(spot)
    createSpot(spot);
    this.props.close(null)
    this.props.temp(null)
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="name">
          <input type="text" name="name" value={this.state.name} onChange={this.onChange}></input>
        </label><br></br>
        <label htmlFor="video">
          <input type="text" name="video" value={this.state.video} onChange={this.onChange}></input>
        </label><br></br>
        <h3>Gym?</h3>
        <label htmlFor="gym">True:
          <input type="radio" name="gym" value={'true'} onChange={this.onChange}></input>
        </label>
        <label htmlFor="gym">False:
          <input type="radio" name="gym" value={'false'} onChange={this.onChange}></input>
        </label><br></br>
        <input type='submit'></input>
      </form>
    )
  }
}

export default AddSpot;