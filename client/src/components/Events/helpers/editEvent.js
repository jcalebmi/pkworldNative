const axios = require('axios');

const editEvent = function (id, path, data) {
  console.log(data)
  // if (path === 'delete') {
  //   return axios.delete(`/events/${id}`)
  //   .then((res) => res.data)
  //   .catch((err) => {
  //     console.log('ERROR: ', err);
  //   });
  // }
  // if (path === "edit") {
  //   return axios.put(`/events/${id}`)
  //   .then((res) => res.data)
  //   .catch((err) => {
  //     console.log('ERROR: ', err);
  //   });
  // }
};

export default editEvent;