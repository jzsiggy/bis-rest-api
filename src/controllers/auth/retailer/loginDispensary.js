const bcrypt = require('bcrypt');
const { Dispensary } = require('../../../models');

const loginDispensary = async ( request , response , next ) => {
  const {
    email,
    password,
  } = request.body;

  const searchResult = await Dispensary.findOne({ email });

  if ( !searchResult ) {
    return response.status(400).json({ 'message' : 'Email not registered' });
  } 
  else if ( !bcrypt.compareSync(password, searchResult.password) ) {
    return response.status(400).json({ 'message' : 'Incorrect password' });
  }
  else {
    request.session.user = searchResult;
    response.status(200).json(searchResult);
    return ;
  };
};

module.exports = {
  loginDispensary,
};