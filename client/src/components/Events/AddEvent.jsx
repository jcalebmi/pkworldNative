import React from 'react';
import SelectLocation from './SelectLocation.jsx';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import submitEvent from './helpers/submitEvent.js';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      address: '',
      city: '',
      state: '',
      country: '',
      gym: null,
      jam: null,
      lat: null,
      lng: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLocation ({results}, address) {
    this.setState({
      address: address.split(',')[0],
      lat: results.lat,
      lng: results.lng
    });
  }
  handleSubmit (e) {
    e.preventDefault();
    const data = this.state;
    submitEvent(data);
    this.props.closeModal();
  }

  render () {
    return (
      <div id="addEvent">
        <div className="formContainer">
          <h2>Add Event</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Event Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                required/>
            </label>
            <label htmlFor="description">
              <input
                type="text"
                placeholder="Description"
                value={this.state.description}
                name="description"
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
            <label htmlFor="state">
            <input
              type="text"
              placeholder="State"
              value={this.state.state}
              name="state"
              onChange={this.handleChange}
              required/>
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
            <SelectLocation
              location={this.props.location}
              handleLocation={this.handleLocation}
              city={this.state.city}
              state={this.state.state}
              country={this.state.country}
              modal={this.props.modal}/>
            <h3>At A Gym?</h3>
            <div className="label">
              <label
                className="radio"
                htmlFor="gym">Yes:
                <input
                  className="radio"
                  type="radio"
                  name="gym"
                  value='true'
                  onChange={this.handleChange}></input>
              </label>
              <label
                className="radio"
                htmlFor="gym">No:
                <input
                  className="radio"
                  type="radio"
                  name="gym"
                  value='false'
                  onChange={this.handleChange}></input>
              </label>
            </div>
            <h3>Is This A Jam?</h3>
            <div className="label">
              <label
                className="radio"
                htmlFor="jam">Yes:
                <input
                  className="radio"
                  type="radio"
                  name="jam"
                  value='true'
                  onChange={this.handleChange}></input>
              </label>
              <label
                className="radio"
                htmlFor="jam">No:
                <input
                  className="radio"
                  type="radio"
                  name="jam"
                  value='false'
                  onChange={this.handleChange}></input>
              </label>
            </div>
            <br></br>
            <input type='submit'></input>
          </form>
          <div
            className="closeModal"
            onClick={this.props.closeModal}>+</div>
        </div>
      </div>
    )
  }
}

export default AddEvent;