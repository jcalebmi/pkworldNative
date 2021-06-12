import React from 'react';
import AddPhotos from './AddPhotos.jsx';
import AddVideos from './AddVideos.jsx';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
// import Carousel from './Carousel.jsx';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firebase from 'firebase';
import 'firebase/auth';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.state = {
      photos: this.props.spot.photos,
      videos: this.props.spot.videos
    }
    this.updatePhotos = this.updatePhotos.bind(this);
    this.updateVideos = this.updateVideos.bind(this);
  }

  updatePhotos (data) {
    this.setState({
      photos: data.photos
    })
  }
  updateVideos (data) {
    this.setState({
      videos: data
    })
  }

  render () {
    return (
      <div id="contentContainer">
        {this.auth.currentUser
        ? <AddPhotos
            updatePhotos={this.updatePhotos}
            spotId={this.props.spot._id}/>
        : null}
        <div id="content">
          <h2>Photos</h2>
          {!this.state.photos.length
            ? <p style={{textAlign: 'center'}}>No Photos Yet</p>
            : null}
          <Carousel>
            {this.state.photos.map((photo, index) =>
            <div key={index}>
              <img src={photo} />
            </div>)}
          </Carousel>
        {this.auth.currentUser
        ? <AddVideos
            updateVideos={this.updateVideos}
            spotId={this.props.spot._id}/>
          : null}
          <div className="videos">
            <h2>Videos</h2>
            {!this.state.videos.length
            ? <p style={{textAlign: 'center'}}>No Videos Yet</p>
            : null}
            <Carousel>
              {this.state.videos.map((video, index) =>
              <div
                className="iframe"
                key={index}>
                <iframe width="560" height="315" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>)}
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;