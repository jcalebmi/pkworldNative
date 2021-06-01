import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';


class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      displayName: this.auth.currentUser.displayName,
      facebook: '',
      instagram: '',
      youtube: '',
      twitter: '',
      phone: '',
      email: this.auth.currentUser.email,
      city: '',
      state: '',
      country: '',
      pic: this.auth.currentUser.photoURL
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault();
    const data = this.state;
    this.props.submitInfo(data);
    this.props.closeModal();
  }

  render () {
    console.log(this.state.phone)
    return (
      <div id="addUser">
        <div className="formContainer">
          <h2>Join</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="phone">
              <input
                type="tel"
                placeholder="Phone"
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="facebook">
              <input
                type="url"
                placeholder="Facebook"
                value={this.state.facebook}
                name="facebook"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="youtube">
              <input
                type="url"
                placeholder="Youtube"
                value={this.state.youtube}
                name="youtube"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="twitter">
              <input
                type="url"
                placeholder="Twitter"
                value={this.state.twitter}
                name="twitter"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="instagram">
              <input
                type="url"
                placeholder="Instagram"
                value={this.state.instagram}
                name="instagram"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="city">
              <input
                type="text"
                placeholder="City"
                value={this.state.city}
                name="city"
                onChange={this.handleChange}
                required/>
            </label>
            <label htmlFor="state">
            <input
              type="text"
              placeholder="State"
              value={this.state.state}
              name="state"
              onChange={this.handleChange}
              required/>
            </label>
            <label htmlFor="country">
            <input
              type="text"
              placeholder="Country"
              value={this.state.country}
              name="country"
              onChange={this.handleChange}
              required/>
            </label>
            <br></br>
            <input type='submit'></input>
          </form><br/>
          <div
            className="closeModal"
            onClick={this.props.closeModal}>+</div>
        </div>
      </div>
    )
  }
}

export default AddUser;