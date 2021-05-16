const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'dist')));

const geoCode = require('./api/geocode.js');

const {Event, User, Spot} = require('./database/index.js');

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
})


const port = 8080;
app.listen(port, () => {
  console.log('listening on, ', port);
});

// let save = (repos) => {

//   for (var i = 0; i < repos.length; i ++) {
//     console.log('REPO', repos[i])
//     var newRepo = new Repo(repos[i]);
//     newRepo.save();

//   }

// }