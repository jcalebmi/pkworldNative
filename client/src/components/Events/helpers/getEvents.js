const axios = require('axios');

const getEvents = function () {
  return axios.get('/events')
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default getEvents;