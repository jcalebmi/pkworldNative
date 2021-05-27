import React from 'react';

import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// const auth = firebase.auth();


class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      facebook: '',
      instagram: '',
      youtube: '',
      twitter: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      country: '',
      pic: ''
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
    return (
      <div id="addUser">
        <div className="formContainer">
          <h2>Join</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">
              <input
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleChange}
                required/>
            </label>
            <label htmlFor="lastName">
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleChange}
                required/>
            </label>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                required/>
            </label>
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
                type="facebook"
                placeholder="Facebook"
                value={this.state.facebook}
                name="facebook"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="youtube">
              <input
                type="youtube"
                placeholder="Youtube"
                value={this.state.youtube}
                name="youtube"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="twitter">
              <input
                type="twitter"
                placeholder="Twitter"
                value={this.state.twitter}
                name="twitter"
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="instagram">
              <input
                type="instagram"
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