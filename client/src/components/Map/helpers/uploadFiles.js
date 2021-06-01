const axios = require('axios');

const uploadFiles = function (data, id) {
  console.log(data)
  return axios.put(`/uploads/${id}`, {data: data})
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default uploadFiles;