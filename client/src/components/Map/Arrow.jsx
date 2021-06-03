import React from 'react';
import arrow from './assets/Daco_5924118.png';

class Arrow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div
        className={`arrow ${this.props.direction}`}
        onClick={this.props.arrowClick}>
          <img src={arrow}/>
      </div>
    )
  }
}
export default Arrow;