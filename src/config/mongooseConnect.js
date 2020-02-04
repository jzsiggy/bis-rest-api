const mongoose = require('mongoose');

const mongooseConnect = () => {
  mongoose.connect('mongodb://localhost:27017/BIS', {useNewUrlParser: true})
  .then(response => {
    console.log('Connected to mongoDB')
  })
  .catch(err => {
    console.log('Error connecting to mongoDB', err);
  });
};

module.exports = {
  mongooseConnect,
};