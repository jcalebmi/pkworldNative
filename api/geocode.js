const axios = require('axios');
const apiToken = require('../myConfig.js');
const {Event, User, Spot} = require('../database/index.js');

let geoCode = (body) => {
  let options = {
    url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${body.lat},${body.lng}&key=${apiToken}`,
  };

  axios.get(options.url).then(function (response) {
    const data = {
      name: body.name,
      address: response.data.results[0].formatted_address,
      lat: body.lat,
      lng: body.lng,
      videos: body.video,
      gym: Boolean(body.gym)
    }
    const spot = new Spot(data);
    console.log(body)
    spot.save()
    console.log('Success')
  }).catch(function (error) {
    console.log(error)
    console.log('ERROR: Axios Get Failed');
  })

}



module.exports = geoCode;