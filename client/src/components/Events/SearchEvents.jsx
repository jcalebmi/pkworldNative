import React from 'react';
import findEvents from './helpers/findEvents.js';

class SearchEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const search = findEvents(e.target.value, this.props.events, this.props.location);
    this.props.updateEvents(search, e.target.value.length, e.target.value);

    this.setState({
      search: e.target.value
    })
  }
  render () {
    return (
      <form className="search">
        <input
          className="search"
          type="text"
          value={this.state.search}
          placeholder="Search Events"
          onChange={this.handleChange} />
      </form>
    )
  }
}

export default SearchEvents;