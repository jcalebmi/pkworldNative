const axios = require('axios');

const uploadVideos = function (videos, id) {
  return axios.post(`/spots/videoUploads/${id}`, videos)
    .then((res) => res.data[0].videos)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default uploadVideos;