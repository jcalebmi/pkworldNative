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
  geoCode(req.body).then(results => Spot.find().then(results => res.status(201).send(results)));
})

app.get('/spots', (req, res) => {
  Spot.find().then(results => {
    res.status(200).send(results)
  })
});

app.put('/spots/:id', (req, res) => {
  const body = req.body.data;
  const id = req.params.id
  geoCode(body, id).then(results => Spot.find().then(results => res.status(201).send(results)));
})

app.delete('/spots/:id', (req, res) => {
  Spot.remove({_id: req.params.id}).then(results => Spot.find().then(results => res.status(201).send(results)))

})

app.post('/events', (req, res) => {
  getLatLng(req.body, 'events').then(results => res.status(200).send(results));
});

app.get('/events', (req, res) => {
  Event.find().then(results => res.status(200).send(results));
})

app.delete(`/events/:id`, (req, res) => {
  Event.remove({_id: req.params.id}).then(results => Event.find().then(data => res.status(201).send(data)))
})

app.put('/events/:id', (req, res) => {
  const body = req.body.data;
  const id = req.params.id;
  getLatLng(body, 'events', id).then(results => Event.find().then(data => res.status(201).send(data)));
})

app.get('/users', (req, res) => {
  User.find().then(results => res.status(200).send(results));
})

app.post('/users', (req, res) => {
  getLatLng(req.body, 'users').then(results => res.status(200).send(results));
});

app.put('/users/:id', (req, res) => {
  const body = req.body.data;
  const id = req.params.id;
  getLatLng(body, 'users', id).then(results => User.find().then(data => res.status(201).send(data)));
})

app.delete(`/users/:id`, (req, res) => {
  User.remove({_id: req.params.id}).then(results => User.find().then(data => res.status(201).send(data)))
})

app.get('/userInfo', (req, res) => {
  User.find({email: req.query.email}).then(results => res.status(200).send(results));
})

const port = 3005;
app.listen(port, () => {
  console.log('listening on, ', port);
});
