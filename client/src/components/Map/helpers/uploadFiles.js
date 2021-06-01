const axios = require('axios');

const uploadFiles = function (data, id) {
  return axios.put(`/spots/uploads/${id}`, {data: data})
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default uploadFiles;