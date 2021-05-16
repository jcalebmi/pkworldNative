const axios = require('axios');


const getMarkers = function () {
  return axios.get(`/spots`)
    .then((res) => {
      const results = res.data;
      return results;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};



export default getMarkers;