import React from 'react';
import Event from './Event.jsx';
import SearchEvents from './SearchEvents.jsx';
import eventList from '../sampleData/Events.js';
import SearchLocations from './SearchLocations.jsx';
import AddEvent from './AddEvent.jsx';
import findEvents from './helpers/findEvents.js';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: eventList,
      display: eventList,
      length: 5,
      currentSearch: '',
      modal: false
    }
    this.loader = React.createRef(null);
    this.updateEvents = this.updateEvents.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  componentDidMount () {
    const sort = findEvents('', this.state.events, this.props.location);
    this.setState({
      display: sort.slice(0, 5)
    })
  }

  updateEvents (search) {
    this.setState({
      display: search.slice(0, this.state.length)
    })
  }

  addEvent (e) {
    e.preventDefault();
    this.setState({
      modal: true
    })
  }
/////////////////////////////////
  loadMore (entries) {
    // const target = entries[0];
    // if (target.isIntersecting && this.state.display.length !== this.state.events.length) {
    //   this.setState({
    //     length: this.state.length + 2,
    //     display: this.state.events.slice(0, this.state.length + 2)
    //   })
    // }
  };

  componentDidUpdate () {
      // const options = {
      //   root: null,
      //   rootMargin: '0px',
      //   threshold: .25,
      // };
      // const observer = new IntersectionObserver(this.loadMore, options);

      // if (this.loader && this.loader.current) {
      //   observer.observe(this.loader.current);
      // }
      // return () => observer.unobserve(this.loader.current);
  };
//////////////////////////////
  render() {
    return (
      <div id="events">
        <div className="forms">
          <SearchLocations />
          <SearchEvents
            events={this.state.events}
            updateEvents={this.updateEvents}
            location={this.props.location}/>
        </div>
        <ul className="dataLists">
          {this.state.display.map((event, index) => <Event key={index} event={event}/>)}
        </ul>
        <div ref={this.loader}>
          <button onClick={this.addEvent}>Add Event</button>
        </div>
        {this.state.modal
          ? <AddEvent />
          : null}
      </div>
    )
  }
}

export default Events;