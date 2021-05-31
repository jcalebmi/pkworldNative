const axios = require('axios');

const editUser = function (id, path, data) {
  if (path === 'delete') {
    return axios.delete(`/users/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
  if (path === "edit") {
    return axios.put(`/users/${id}`, {data: data})
    .then((res) => res.data)
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }
};

export default editUser;