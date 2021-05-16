const axios = require('axios');


const createSpot = function (data) {
  return axios.post(`/spot`, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};



export default createSpot;