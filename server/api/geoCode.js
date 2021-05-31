const axios = require('axios');
const apiToken = require('../../myConfig.js');
const {Event, User, Spot} = require('../../database/index.js');

let geoCode = (body, id) => {
  let options = {
    url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${body.lat},${body.lng}&key=${apiToken}`,
  };

  return axios.get(options.url).then(function (response) {
    const data = {
      name: body.name,
      email: body.email,
      description: body.description,
      address: response.data.results[0].formatted_address,
      lat: body.lat,
      lng: body.lng,
      videos: body.video,
      gym: body.gym
    }
    if (id) {
      const spot = Spot.findByIdAndUpdate({'_id': id}, {...data}).then(results => results);
        return spot
    } else {
      const spot = new Spot(data);
      return spot.save().then(Spot.find().then(results => results))
      console.log('Success')
    }

  }).catch(function (error) {
    console.log(error)
    console.log('ERROR: Axios Get Failed');
  })

}



module.exports = geoCode;