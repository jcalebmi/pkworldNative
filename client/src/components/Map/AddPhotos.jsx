import React from 'react';
import uploadPhotos from './helpers/uploadPhotos.js';

class AddPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.data = new FormData()
    this.handlePhotos = this.handlePhotos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePhotos (e) {
    e.preventDefault();
    const imgCont = document.getElementById('thumbnail');
    for (let i = 0; i < e.target.files.length; i += 1) {
      const img = document.createElement('div');
      img.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[i])})`;
      img.className = 'thumbnail';

      const x = document.createElement('button');
      x.className = 'x';
      x.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentNode.remove();
      })
      img.appendChild(x);

      imgCont.appendChild(img);
      this.data.append('spotPhotos', e.target.files[i])
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    uploadPhotos(this.data, this.props.spotId).then(res => this.props.updatePhotos(res))
    const parent = document.getElementById('thumbnail');
    while(parent.firstChild) {
      parent.firstChild.remove();
    }
  }

  render () {
    return (
      <div style={{textAlign:'right'}}>
          <form
            method="post"
            onSubmit={this.handleSubmit}
            encType="multipart/form-data">
            <input
              multiple
              accept="image/png, image/gif, image/jpeg, image/jpg"
              style={{display: 'none'}}
              type="file"
              name="spotPhotos"
              onChange={this.handlePhotos}
              ref={fileInput => this.fileInput = fileInput}/>
              <button
                type="button"
                onClick={() => this.fileInput.click()}>Upload Photo</button>
            <input type="submit"/>
          </form>
          <div id="thumbnail" className="thumbnail">
          </div>
      </div>
    )
  }
}

export default AddPhotos;