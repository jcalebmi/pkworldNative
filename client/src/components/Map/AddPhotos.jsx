import React from 'react';
import uploadFiles from './helpers/uploadFiles.js';

class AddPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      videos: [],

    }
    this.handlePhotos = this.handlePhotos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePhotos (e) {
    e.preventDefault();
    let fd = new FormData();
    fd[e.target.files[0].name] = e.target.files[0]
    let photoArr = this.state.photos;
    photoArr.push(e.target.files);
    this.setState({
      photos: fd
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    uploadFiles(this.state.photos, this.props.spotId)
  }

  render () {
    return (
      <div>
        <input
          style={{display: 'none'}}
          type="file"
          onChange={this.handlePhotos}
          ref={fileInput => this.fileInput = fileInput}/>
          <button onClick={() => this.fileInput.click()}>Upload Photo</button>
          <form onSubmit={this.handleSubmit}>
            <input type="submit"/>
          </form>
      </div>
    )
  }
}

export default AddPhotos;