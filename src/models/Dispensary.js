const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dispensarySchema = new Schema({
  email : {
    type : String,
  },
  name : {
    type : String,
  },
  password : {
    type : String,
  },
  address : {
    type : String,
  },
  stock : [{
    type : Schema.Types.ObjectId,
    ref : 'Item',
  }],
});

const Dispensary = mongoose.model('Dispensary', dispensarySchema);

module.exports = {
  Dispensary,
};