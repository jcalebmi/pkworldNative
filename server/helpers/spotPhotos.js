const axios = require('axios');
require('dotenv').config();
const {Event, User, Spot} = require('../../database/index.js');

const spotPhotos = (files, id) => {
   const paths = files.map(file => file.path)
   const data = Spot.findByIdAndUpdate({'_id': id}, {$push: {photos: [...paths]}}).then(results => results);
        return data
}
module.exports = spotPhotos;