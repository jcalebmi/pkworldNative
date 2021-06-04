import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class LoggedOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="spotMarker">
        <h2 className="submitSpot">{this.props.selected.name || <span
        className="seeMore"
        onClick={() => this.props.changeFeed('Profile')}>Sign in to submit a spot.<br/>
        Click to sign in.</span>}</h2>
        <p className='bold underline'>{this.props.selected.address}</p>
        <p>{this.props.selected.description}</p>
        {this.props.selected.photos
        ?<div id="markerContent">
            <Carousel showThumbs={false}>
              {this.props.selected.photos.map((photo, index) =>
              <div key={index}>
                <img src={photo} />
              </div>)}
            </Carousel>
          </div>
        : null}
        {this.props.selected.name ?
        <p
          onClick={() => this.props.changeFeed('content', this.props.selected)}
          className="seeMore underline">
          Show Content?
        </p> : null}
      </div>
    )
  }
}

export default LoggedOut;