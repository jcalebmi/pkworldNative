const axios = require('axios');

const submitUser = function (data) {
  return axios.post('/users', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};



export default submitUser;