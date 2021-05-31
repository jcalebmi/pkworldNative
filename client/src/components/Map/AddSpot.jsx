import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import createSpot from './helpers/createSpot.js';

class AddSpot extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      name: '',
      email: this.auth.currentUser.email,
      description: '',
      video: [],
      photos: [],
      gym: null
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    },console.log(this.state.gym))
  }
  onSubmit (e) {
    e.preventDefault();
    console.log(this.state.gym)
    const spot = {
        name: this.state.name,
        email: this.state.email,
        description: this.state.description,
        lat: this.props.coordinates.lat,
        lng: this.props.coordinates.lng,
        gym: this.state.gym,
        videos: this.state.video,
        photos: this.state.photos
      }

    createSpot(spot).then(data => this.props.setMarkers(data));
    this.props.close(null)
    this.props.temp(null)
  }

  render () {
    return (
      <form
        onSubmit={this.onSubmit}
        id="addSpot">
        <label htmlFor="name">
          <input
            required
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Spot Name"
            onChange={this.onChange}></input>
        </label><br/>
        <label htmlFor="description">
          <textarea
            name="description"
            value={this.state.description}
            placeholder="Description, Kick out rate, times to avoid, etc"
            onChange={this.onChange}/>
        </label><br></br>
        <h3>Gym?</h3>
        <div className="label">
          <label
            htmlFor="gym">Yes:
            <input
              type="radio"
              name="gym"
              value='true'
              onChange={this.onChange}></input>
          </label>
          <label
            htmlFor="gym">No:
            <input
              type="radio"
              name="gym"
              value='false'
              onChange={this.onChange}></input>
          </label><br/>
        </div>
        <br></br>
        <input type='submit'></input>
      </form>
    )
  }
}

export default AddSpot;