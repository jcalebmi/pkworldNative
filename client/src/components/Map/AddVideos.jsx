import React from 'react';
import uploadVideos from './helpers/uploadVideos.js';

class AddVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [{video: ""}]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange (e, index) {
    const {name, value} = e.target;
    const videos = this.state.videos;
    videos[index][name] = value;
    this.setState({
      videos: videos
    })
  }

  handleClick () {
    this.setState({
      videos: [...this.state.videos, {video: ""}]
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    uploadVideos(this.state.videos, this.props.spotId).then(res => this.props.updateVideos(res))
  }

  render () {
    return (
      <div>
          <form
            onSubmit={this.handleSubmit}>
            {this.state.videos.map((video, index)=>
            <div key={index}>
              <input
              type="url"
              name="video"
              placeholder="Add Video URL"
              onChange={(e) => this.handleChange(e, index)}></input>
            </div>
            )}

              <button
                onClick={this.handleClick}
                type="button">+</button>
            <input type="submit"/>
          </form>
          <div id="vidUpload" className="vidUpload">
          </div>
      </div>
    )
  }
}

export default AddVideos;