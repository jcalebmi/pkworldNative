const axios = require('axios');

const uploadPhotos = function (data, id) {
  return axios.post(`/spots/uploads/${id}`, data)
    .then((res) => res.data[0])
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default uploadPhotos;