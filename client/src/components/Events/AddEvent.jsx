import React from 'react';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      location: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div id="addEvent">
        <form>
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
          <label htmlFor="location">
            <input
              type="text"
              placeholder="location"
              value={this.state.location}
              name="location"
              onChange={this.handleChange}
              required/>
          </label>
        </form>
      </div>
    )
  }
}

export default AddEvent;