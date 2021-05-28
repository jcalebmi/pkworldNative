import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import deleteEvent from './helpers/deleteEvent.js';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      more: false
    }
    this.showMore = this.showMore.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showMore () {
    this.setState({
      more: !this.state.more
    })
  }

  handleDelete () {
    deleteEvent(this.props.event._id)
  }
  render () {
    return (
      <li className="dataLists">
        {this.state.more ?
          <div>
            <h3>{this.props.event.name}</h3>
            <div className="contentContainer">
              <div className="contents">
                <p>
                  Description: {this.props.event.description}<br/>
                  Website: {this.props.event.website}<br/>
                  City: {this.props.event.city}<br/>
                  State: {this.props.event.state}<br/>
                  Is this a jam?: {this.props.event.jam ? 'Yes' : 'No'}<br/>
                  Is this at a gym: {this.props.event.gym ? 'Yes' : 'No'}
                </p>
              </div>
              <br/>
              <span className="bold seeMore" onClick={this.showMore}>Close</span><br/>
              {this.auth.currentUser && this.props.event.email === this.auth.currentUser.email
            ? <div id="deleteLi">
                <div></div>
                <span
                className="seeMore deleteLi"
                onClick={this.handleDelete}
                >Delete Your Event?</span>
              </div>
              : null}
            </div>
          </div> :
          <div>
            <h3>{this.props.event.name}</h3>
            <div className="contentContainer">
              <div className="contents">
                <p>Description: {this.props.event.description}<br/>
                Website: {this.props.event.website}<br/>
                </p>
              </div>
              <br/>
              <span
                className="bold seeMore"
                onClick={this.showMore}>More</span><br/>
              {this.auth.currentUser && this.props.event.email === this.auth.currentUser.email
            ? <div id="deleteLi">
                <div></div>
                <span
                className="seeMore deleteLi"
                onClick={this.handleDelete}
                >Delete Your Event?</span>
              </div>
              : null}
            </div>
          </div>}
      </li>
    )
  }
}

export default Event;