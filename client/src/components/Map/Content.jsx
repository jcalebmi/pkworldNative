import React from 'react';
import AddPhotos from './AddPhotos.jsx';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
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
  }

  updatePhotos (data) {
    this.setState({
      photos: data.photos
    }, console.log(this.state.photos))
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
          <div className="photos">
            {this.state.photos.map((photo, index) =><img key={index} src={photo} />)}
          </div>
          <h2>Videos</h2>
          <div className="videos">
          </div>
        </div>
      </div>
    )
  }
}

export default Content;