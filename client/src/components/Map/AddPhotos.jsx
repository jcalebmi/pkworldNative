import React from 'react';

class AddPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.handlePhotos = this.handlePhotos.bind(this);
  }

  handlePhotos (e) {
    e.preventDefault();
    let fd = new FormData();
    fd[e.target.files[0].name] = e.target.files[0]
    console.log(e.target.files[0].name, fd);
    let photoArr = this.state.photos;
    photoArr.push(e.target.files);
    this.setState({
      photos: photoArr
    })
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
      </div>
    )
  }
}

export default AddPhoto;