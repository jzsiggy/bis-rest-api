const bcrypt = require('bcrypt');
const { Dispensary } = require('../../../models');

const signupDispensary = async (request , response , next) => {
  const {
    email,
    name,
    address,
    password,
    stock,
  } = request.body;

  const searchResult = await Dispensary.findOne({ email });
  
  if ( searchResult ) {
    response.status(400).json({ 'message' : 'This dispensary is already registered in our system' })
    return ;
  } else {
    const hashPass = bcrypt.hashSync(password, 10);
    Dispensary.create({
      email,
      name,
      address,
      password : hashPass,
      stock,
    })
    .then( createdDispensary => {
      request.session.user = createdDispensary;
      response.status(200).json(createdDispensary);
      return ;
    })
    .catch(err => {
      console.log(err);
      response.status(500).json({ 'message' : 'Internal server error' });
      return ;
    });
  };
};

module.exports = {
  signupDispensary,
};