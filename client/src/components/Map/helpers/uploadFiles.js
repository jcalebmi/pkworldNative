const axios = require('axios');

const uploadFiles = function (data, id) {
  return axios.post(`/spots/uploads/${id}`, data)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default uploadFiles;