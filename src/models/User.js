const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email : {
    type : String,
  },
  password : {
    type : String,
  },
  id : {
    type : String,
  },
  cart : {
    type : Array,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};