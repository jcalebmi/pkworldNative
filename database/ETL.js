const csv = require ('csv-parser');
const fs = require('fs');
const db = require('./setup.js');
const {Location} = require('./index.js');

fs.createReadStream('database/world-cities_csv.csv')
  .pipe(csv())
  .on('data', (row) => {
    const location = new Location(row);
    location.save();
  })
  .on('end', () => {
    console.log('success')
  });
