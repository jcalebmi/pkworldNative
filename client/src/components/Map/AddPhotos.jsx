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
    const imgCont = document.getElementById('thumbnail');
    const img = document.createElement('img');
    for (let i = 0; i < e.target.files.length; i += 1) {
      img.src = URL.createObjectURL(e.target.files[i]);
      img.className = 'thumbnail';
      imgCont.appendChild(img);
        this.setState({
          photos: this.state.photos.concat(e.target.files[i])
        })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    let data = new FormData();
    this.state.photos.forEach((photo, index) => {
      data[index] = photo;
    });
    uploadFiles(data, this.props.spotId).then(res => console.log(res))
  }

  render () {
    return (
      <div>
        <input
          multiple
          accept="image/*"
          style={{display: 'none'}}
          type="file"
          onChange={this.handlePhotos}
          ref={fileInput => this.fileInput = fileInput}/>
          <button onClick={() => this.fileInput.click()}>Upload Photo</button>
          <form onSubmit={this.handleSubmit}>
            <input type="submit"/>
          </form>
          <div id="thumbnail" className="thumbnail">

          </div>
      </div>
    )
  }
}

export default AddPhotos;