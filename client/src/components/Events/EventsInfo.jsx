import React from 'react';

class EventsInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="info">
        <p>
          Sort events by nearest to you or by date, search for events in the search bar, or add events to the eventList.
          </p>
          <div>
            <span
              className="seeMore signIn"
              onClick={() => {this.props.changeFeed('Profile')}}>Sign in to add spots.
            </span>
          </div>
      </div>
    )
  }
}

export default EventsInfo;