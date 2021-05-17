const axios = require('axios');

const submitEvent = function (data) {
  return axios.post('/events', data)
    .then((res) => {
      console.log(res)
      return res;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};



export default submitEvent;