import React from 'react';
import createSpot from './helpers/createSpot.js';

class AddSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      video: '',
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
    const spot = {
        name: this.state.name,
        description: this.state.description,
        lat: this.props.coordinates.lat,
        lng: this.props.coordinates.lng,
        gym: this.state.gym,
        videos: this.state.video
      }

    createSpot(spot);
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
        <label htmlFor="video">
          <input
            type="url"
            name="video"
            value={this.state.video}
            placeholder="Add Video Url?"
            onChange={this.onChange}></input>
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
          </label>
        </div>
        <br></br>
        <input type='submit'></input>
      </form>
    )
  }
}

export default AddSpot;