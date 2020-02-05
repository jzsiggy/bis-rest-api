const bcrypt = require('bcrypt');
const { User } = require('../../../models');

const signupUser = async (request , response , next) => {
  const {
    email,
    password,
    id,
  } = request.body;

  const searchResult = await User.findOne({ email });

  if ( searchResult ) {
    response.status(400).json({ 'message' : 'Email already registered' });
    return ;
  } else {
    const hashPass = bcrypt.hashSync(password, 10);
    User.create({
      email,
      password : hashPass,
      id,
    })
    .then(createdUser => {
      request.session.user = createdUser;
      response.status(200).json(createdUser);
      return ;
    })
    .catch(err => {
      response.status(500).json({ 'message' : 'Internal server error' });
      return ;
    })
  };
};

module.exports = {
  signupUser,
};