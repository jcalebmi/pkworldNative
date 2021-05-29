import React from 'react';
import firebase from 'firebase';
import SearchEvents from './SearchEvents.jsx';
import 'firebase/auth';
import 'firebase/app';

class EventsInfo extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
  }

  render () {
    return (
      <div className="info">
        <p>
          Sort events by nearest to you or by date, search for events in the search bar, or add events to the eventList.
          </p>
          <div>
            {this.auth.currentUser
              ? <button
                  onClick={this.props.addEvent}>Add Event</button>
              : <span
                  className="seeMore signIn"
                  onClick={() => {this.props.changeFeed('Profile')}}>Sign in to add events.
                </span>}
          </div>
          <div className="forms">
            <div></div>
            <SearchEvents
              events={this.props.events}
              updateEvents={this.props.updateEvents}
              location={this.props.location}/>
          </div>
      </div>
    )
  }
}

export default EventsInfo;