import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from './Arrow.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      image: this.props.photos[0]
    }
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous () {
    this.setState({
      index: this.state.index - 1,
    })
  }

  next () {
    this.setState({
      index: this.state.index + 1,
    })
  }

  render () {
    return (
      <div className="photos">
        <h2>Photos</h2>
        <div className="photoSlide">
        {/* {this.state.index > 0
        ? <Arrow
          direction="left"
          arrowClick={this.previous}
          />
        : null} */}

        <img
           src={this.props.photos[this.state.index]}/>

          {this.state.index < this.props.photos.length - 1
        ? <Arrow
          direction="right"
          arrowClick={this.next}
          />
        : null}
        </div>
      </div>
    )
  }
}

export default Carousel;