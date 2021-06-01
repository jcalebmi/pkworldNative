const axios = require('axios');
const apiToken = require('../../myConfig.js');
const {Event, User, Spot} = require('../../database/index.js');

let getLatLng = (body, route, id) => {
  if (route === 'users') {
    const address = `${body.city}+${body.state}+${body.country}`;
    let options = {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiToken}`,
    };
    return axios.get(options.url).then(function (response) {
      const query = {
        displayName: body.displayName,
        facebook: body.facebook,
        phone: body.phone,
        instagram: body.instagram,
        youtube: body.youtube,
        twitter: body.twitter,
        email: body.email,
        city: body.city,
        state: body.state,
        country: body.country,
        pic: body.pic,
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng
      }
      if (!id) {
        const user = new User(query);
        const data = user.save().then(results => {
        }).then(results => {
          return User.find().then(data => {
            return data;
          })
        })
      return data;
      }
      if (id) {
        const data = User.findByIdAndUpdate({'_id': id}, {...query}).then(results => results);
        return data
      }
    })
    .catch(function (error) {
      console.log(error)
      console.log('ERROR: Axios Get Failed');
    });
  } else if (route === 'events') {

    const address = `${body.address}+${body.city}+${body.state}+${body.country}`;
    let options = {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiToken}`,
    };

    return axios.get(options.url).then(function (response) {
      const query = {
        name: body.name,
        email: body.email,
        description: body.description,
        website: body.website,
        date: body.date,
        address: body.address,
        city: body.city,
        state: body.state,
        country: body.country,
        jam: body.jam,
        gym: body.gym,
        photos: null,
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng
      }
      if (!id) {
        const event = new Event(query);
        const data = event.save().then(results => {
          return Event.find().then(data => data)
        })
       return data;
      }
      if (id) {
        const data = Event.findByIdAndUpdate({'_id': id}, {...query}).then(results => results);
        return data
      }

    })
    .catch(function (error) {
      console.log(error)
      console.log('ERROR: Axios Get Failed');
    });
  }

}



module.exports = getLatLng;