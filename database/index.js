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
  description: String,
  date: Date,
  address: String,
  city: String,
  state: String,
  country: String,
  zip: Number,
  jam: Boolean,
  gym: Boolean,
  photos: [String]
});

let Event = mongoose.model('Event', eventSchema);

let userSchema = mongoose.Schema({
  userName: {type: String, unique: true},
  name: String,
  facebook: String,
  instagram: String,
  youtube: String,
  twitter: String,
  phone: Number,
  email: String,
  city: String,
  state: String,
  country: String,
  pic: String
});

let User = mongoose.model('User', userSchema);

let spotSchema = mongoose.Schema({
  name: String,
  address: String,
  lat: Number,
  lng: Number,
  photos: [String],
  videos: [String],
  gym: Boolean
});

let Spot = mongoose.model('Spot', spotSchema);

module.exports = {Event, User, Spot};