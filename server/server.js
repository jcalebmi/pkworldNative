const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const multer = require('multer');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '/../', 'client', 'dist')));

const geoCode = require('./api/geoCode.js');
const getLatLng = require('./api/getLatLng.js');
const spotPhotos = require('./helpers/spotPhotos.js');

const {Event, User, Spot, Location} = require('../database/index.js');

const { CLOUD_NAME, CLOUD_API, CLOUD_SECRET, CLOUDINARY_URL} = require('../cloudinaryConfig.js');
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API,
  api_secret: CLOUD_SECRET,
})

const spotPhotoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'spots'
  },
  allowedFormats: ["jpg", "png", "jpeg", "gif"],
  transformation: [
     { if: "w_gt_1900", width: 1900, crop: "scale" },
     { if: "h_gt_1900", height: 1900, crop: "scale" },
     { quality: "auto" },
     { format: 'jpg' }
  ]
});
const spotPhotoParser = multer({ storage: spotPhotoStorage });

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'client/dist/uploads/spots/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
//   // file.originalname
// })

// var upload = multer({ storage: storage })
// upload.array('spots', 5)


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

app.post('/spots/uploads/:id', spotPhotoParser.array('spotPhotos'), (req, res) => {
  const id = req.params.id;
  const body = req.files
  const UUIDS = req.files;
  spotPhotos(UUIDS, id).then(Spot.find({'_id': id}).then(results => res.status(201).send(results)))
})
app.post('/spots/videoUploads/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body
  const videos = req.body.map(video => video.video);
  Spot.findByIdAndUpdate({'_id': id}, {$push: {videos: [...videos]}}).then(results => Spot.find({'_id': id}).then(results => res.status(200).send(results)));
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

// app.get('/locations/countries', (req, res) => {
//   Location.find().then(data => {
//     let countries = data.map(country => country.country);
//     let once = [...new Set(countries)]
//     let results = Array.prototype.slice.call(once);
//     res.status(200).send(results);
//   });
// })

// app.get('/locations/states/:country', (req, res) => {
//   Location.find({'country': req.params.country}).then(data => {
//     let states = [...new Set(data.map(country => country.subcountry))];
//     res.status(200).send(states);
//   })
// })

// app.get('/locations/cities/:state', (req, res) => {
//   Location.find({'subcountry': req.params.state}).then(data => {
//     let cities = [...new Set(data.map(state => state.name))];
//     res.status(200).send(cities);
//   })
// })

const port = 3005;
app.listen(port, () => {
  console.log('listening on, ', port);
});
