import React from 'react';
import Event from './Event.jsx';
import SearchEvents from './SearchEvents.jsx';
import eventList from '../sampleData/Events.js';
import SearchLocations from './SearchLocations.jsx';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventList,
      display: eventList
    }
    this.updateEvents = this.updateEvents.bind(this);
  }

  updateEvents (search) {
    this.setState({
      display: search
    })
  }

  render() {
    return (
      <div id="events">
        <div className="forms">
          <SearchLocations />
          <SearchEvents
            events={this.state.events}
            updateEvents={this.updateEvents}/>
        </div>
        <ul className="dataLists">
          {this.state.display.map((event, index) => <Event key={index} event={event}/>)}
        </ul>
      </div>
    )
  }
}

export default Events;