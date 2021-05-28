const axios = require('axios');

const getEvents = function (id) {
  return axios.delete(`/events/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default getEvents;