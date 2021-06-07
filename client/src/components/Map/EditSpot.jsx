import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import editSpot from './helpers/editSpot.js';

class EditSpot extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      name: this.props.selected.name,
      phone: this.props.selected.phone,
      email: this.auth.currentUser.providerData[0].email,
      description: this.props.selected.description,
      gym: this.props.selected.gym,
      delete: 'edit'
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
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
        email: this.state.email,
        description: this.state.description,
        lat: this.props.coordinates.lat,
        lng: this.props.coordinates.lng,
        gym: this.state.gym,
      }

    editSpot(this.props.selected._id, spot, this.state.delete).then(data => this.props.setMarkers(data));
    this.props.close(null)
    this.props.temp(null)
  }

  edit () {
    this.setState({
      delete: 'edit'
    })
  }
  delete (e) {
    this.setState({
      delete: 'delete'
    })
  }

  render () {
    return (
      this.state.delete === 'edit'
        ?<form
          onSubmit={this.onSubmit}
          id="addSpot">
          <h2 className="seeMore"><span
              onClick={this.edit}
              >Edit</span> |
              <span
              onClick={this.delete}> Delete</span></h2>
          <div>
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
              </label>
            </div>
            <br></br>
            <input type='submit'></input>
          </div>
        </form>
      :<form
          id="deleteSpot"
          onSubmit={this.onSubmit}>
        <h2 className="seeMore"><span
              onClick={this.edit}
              >Edit</span> |
              <span
              onClick={this.delete}> Delete</span></h2>
        <h3>Delete This Spot?</h3>
        <input
          type="submit"
          value="Delete"></input>
        </form>
    )
  }
}

export default EditSpot;