const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../', 'client', 'dist')));

const geoCode = require('./api/geoCode.js');
const getLatLng = require('./api/getLatLng.js');

const {Event, User, Spot} = require('../database/index.js');

app.post('/spot', (req, res) => {
  geoCode(req.body);
  Spot.find().then(results => {
    res.status(200).send(results)
  })
})

app.get('/spots', (req, res) => {
  Spot.find().then(results => {
    res.status(200).send(results)
  })
});

app.post('/events', (req, res) => {
  getLatLng(req.body, 'events').then(results => res.status(200).send(results));
});

app.get('/events', (req, res) => {
  Event.find().then(results => res.status(200).send(results));
})

app.get('/users', (req, res) => {
  User.find().then(results => res.status(200).send(results));
})

app.post('/users', (req, res) => {
  getLatLng(req.body, 'users').then(results => res.status(200).send(results));
});

app.get('/userInfo', (req, res) => {
  User.find({email: req.query.email}).then(results => res.status(200).send(results));
})

const port = 3005;
app.listen(port, () => {
  console.log('listening on, ', port);
});
