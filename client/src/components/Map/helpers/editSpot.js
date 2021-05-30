const axios = require('axios');


const editSpot = function (id, data, path) {
  if (path === 'edit') {
    return axios.put(`/spots/${id}`, {data :data})
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
  if (path === 'delete') {
    return axios.delete(`/spots/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
};



export default editSpot;