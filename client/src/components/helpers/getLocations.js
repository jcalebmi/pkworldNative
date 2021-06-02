const axios = require('axios');

const getEvents = function (path, name) {
  if (path === 'countries') {
    return axios.get(`/locations/countries`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
  if (path === 'states') {
    return axios.get(`/locations/states/${name}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
  if (path === 'cities') {
    return axios.get(`/locations/cities/${name}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
};

export default getEvents;