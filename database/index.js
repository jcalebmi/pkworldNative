const mongoose = require('mongoose');
const db = require('./setup.js');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/pkworld', {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('CONNECTED')
// });

let eventSchema = mongoose.Schema({
  name: String,
  email: String,
  date: {type: [Date], required: true},
  description: String,
  website: String,
  address: String,
  city: String,
  state: String,
  country: String,
  jam: Boolean,
  gym: Boolean,
  photos: [String],
  videos: [String],
  lat: Number,
  lng: Number,
  reported: Number
});

let Event = mongoose.model('Event', eventSchema);

let userSchema = mongoose.Schema({
  displayName: String,
  firstName: String,
  lastName: String,
  facebook: String,
  instagram: String,
  youtube: String,
  twitter: String,
  phone: Number,
  email: {type: String, unique: true},
  city: String,
  state: String,
  country: String,
  host: Boolean,
  pic: String,
  lat: Number,
  lng: Number,
  shareEmail: Boolean,
  reported: Number
});

let User = mongoose.model('User', userSchema);

let spotSchema = mongoose.Schema({
  name: String,
  email: String,
  description: String,
  address: String,
  lat: Number,
  lng: Number,
  photos: [String],
  videos: [String],
  gym: Boolean,
  reported: Number
});

let Spot = mongoose.model('Spot', spotSchema);

let locationSchema = mongoose.Schema({
  name: String,
  country: String,
  subcountry: String,
  geonameid: Number
})

let Location = mongoose.model('Location', locationSchema);

module.exports = { db, Event, User, Spot, Location};