const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pkworld', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('CONNECTED')
});

let eventSchema = mongoose.Schema({
  name: String,
  email: String,
  date: [Date],
  description: String,
  website: String,
  address: String,
  city: String,
  state: String,
  country: String,
  jam: Boolean,
  gym: Boolean,
  photos: [String],
  lat: Number,
  lng: Number
});

let Event = mongoose.model('Event', eventSchema);

let userSchema = mongoose.Schema({
  displayName: String,
  facebook: String,
  instagram: String,
  youtube: String,
  twitter: String,
  phone: Number,
  email: {type: String, unique: true},
  city: String,
  state: String,
  country: String,
  pic: String,
  lat: Number,
  lng: Number
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
  gym: Boolean
});

let Spot = mongoose.model('Spot', spotSchema);

module.exports = { db, Event, User, Spot};