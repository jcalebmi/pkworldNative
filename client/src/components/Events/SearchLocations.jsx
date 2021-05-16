import React from 'react';

class SearchLocations extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <label className="select" id="label">Search Locations:<br></br>
        <select className="select">
          <option value="place">place</option>
        </select>
      </label>
    )
  }
}

export default SearchLocations;