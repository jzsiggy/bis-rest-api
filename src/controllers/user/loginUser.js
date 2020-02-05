const bcrypt = require('bcrypt');
const { User } = require('../../models');

const loginUser = async (request, response, next) => {
  const {
    email,
    password,
  } = request.body;

  searchResult = await User.findOne({ email });
  if ( !searchResult ) {
    response.status(400).json({ 'message' : 'Email not registered' });
    return ;
  } else {
    if ( !bcrypt.compareSync(password, searchResult.password) ) {
      response.status(400).json({ 'message' : 'Incorrect password' });
      return ;
    } else {
      request.session.user = searchResult;
      response.status(200).json(searchResult);
      return ;
    };
  };
};

module.exports = {
  loginUser,
};