import React from 'react';
import Event from './Event.jsx';
import SearchEvents from './SearchEvents.jsx';
import eventList from '../sampleData/Events.js';
import SearchLocations from './SearchLocations.jsx';
import AddEvent from './AddEvent.jsx';
import findEvents from './helpers/findEvents.js';
import getEvents from './helpers/getEvents.js';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      display: [],
      length: 5,
      currentSearch: '',
      modal: false
    }
    this.loader = React.createRef(null);
    this.updateEvents = this.updateEvents.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount () {
    getEvents().then(data => {
      const sort = findEvents('', data, this.props.location);
      this.setState({
      events: data,
      display: sort.slice(0, 5)
    })
    })
  }

  updateEvents (search) {
    this.setState({
      display: search.slice(0, this.state.length)
    })
  }

  addEvent (e) {
    if (this.state.modal) {
      this.closeModal();
      return;
    }
    this.setState({
      modal: true
    });
    // if (this.node.contains(e.target)) {
    //   return;
    // }
    // document.addEventListener('click', this.closeModal);
  }
  closeModal () {
    this.setState({
      modal: false
    }, document.removeEventListener('click', this.closeModal))
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
        {this.state.modal
          ? <AddEvent
              location={this.props.location}
              closeModal={this.closeModal}
              modal={this.state.modal}
              />
          : null}
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
      </div>
    )
  }
}

export default Events;