const axios = require('axios');

const getEvents = function (email) {
  return axios.get(`/userInfo/?email=${email}`, )
    .then((res) => res.data[0])
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default getEvents;