const mongoose = require('mongoose');

const mongooseConnect = () => {
  mongoose.connect(`${process.env.DB_CONNECTIONSTRING}`, {useNewUrlParser: true})
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