import React from 'react';
import findEvents from './helpers/findEvents.js';

class SearchEvents extends React.Component {
  constructor(props) {
    super(props);
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
      <div>
        <select onChange ={this.handleSelect}>
          <option value='date'>Date</option>
          <option value="nearest">Nearest</option>
        </select>
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