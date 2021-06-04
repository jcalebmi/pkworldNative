const axios = require('axios');
require('dotenv').config();
const {Event, User, Spot} = require('../../database/index.js');

let getLatLng = (body, route, id) => {
  if (route === 'users') {
    const city = body.city || body.country;
    const state = body.state || body.country;
    const address = `${city}+${state}+${body.country}`;
    let options = {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEAPI}`,
    };
    return axios.get(options.url).then(function (response) {
      const query = {
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
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
        host: body.host,
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
    const city = body.city || body.country;
    const state = body.state || body.country;
    const address = `${body.address}+${city}+${state}+${body.country}`;
    let options = {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEAPI}`,
    };

    return axios.get(options.url).then(function (response) {
      const query = {
        name: body.name,
        userName: body.userName,
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
        photos: [],
        videos: [],
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