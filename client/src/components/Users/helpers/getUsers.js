const axios = require('axios');

const getUsers = function () {
  return axios.get('/users')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
};

export default getUsers;