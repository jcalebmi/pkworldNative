import React from 'react';
import findEvents from './helpers/findEvents.js';
import firebase from 'firebase';
import 'firebase/auth';

class SearchEvents extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      search: '',
      option: 'date'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange (e) {
    const search = findEvents(e.target.value, this.props.events, this.props.location, this.state.option);
    this.props.updateEvents(search, e.target.value.length, e.target.value, this.state.option);

    this.setState({
      search: e.target.value
    })
  }

  handleSelect (e) {
    this.setState({
      option: e.target.value
    });
    const search = findEvents(this.state.search, this.props.events, this.props.location, e.target.value);
    this.props.updateEvents(search, this.state.search.length, this.state.search, e.target.value)
  }
  render () {
    return (
      <div className="forms">
        <select onChange ={this.handleSelect}>
          <option value='date'>Date</option>
          <option value="nearest">Nearest</option>
        </select>
        <div className="add">
            {this.auth.currentUser
              ? <button
                  onClick={this.props.addEvent}>Add Event</button>
              : <span
                  className="seeMore signIn"
                  onClick={() => {this.props.changeFeed('Profile')}}>Sign in to add events
                </span>}
          </div>
        <form className="search">
          <input
            className="search"
            type="text"
            value={this.state.search}
            placeholder="Search Events"
            onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default SearchEvents;