import React from 'react';

class Arrow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div
        className={`arrow ${this.props.direction}`}
        onClick={this.props.arrowClick}>
          hello
          {this.props.glyph}
      </div>
    )
  }
}
export default Arrow;