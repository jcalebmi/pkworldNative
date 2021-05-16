import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      more: false
    }
    this.showMore = this.showMore.bind(this);
  }

  showMore () {
    this.setState({
      more: !this.state.more
    })
  }
  render () {
    return (
      <li className="dataLists">
        {this.state.more ?
          <div>
            <h3>{this.props.event.name}</h3>
            <div className="contentContainer">
              <div className="contents">
                <span>Description: {this.props.event.description}</span><br></br>
                <span>City: {this.props.event.city}</span><br></br>
                <span>State: {this.props.event.state}</span>
              </div>
              <br></br>
              <span className="bold" onClick={this.showMore}>Close</span>
            </div>
          </div> :
          <div>
            <h3>{this.props.event.name}</h3>
            <div className="contentContainer">
              <div className="contents">
                <span>Description: {this.props.event.description}</span>
              </div>
              <br></br>
              <span className="bold" onClick={this.showMore}>More</span>
            </div>
          </div>}
      </li>
    )
  }
}

export default Event;