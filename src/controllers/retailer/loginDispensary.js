const bcrypt = require('bcrypt');
const { Dispensary } = require('../../models');

const loginDispensary = ( request , response , next ) => {
  const {
    email,
    password,
  } = request.body;

  Dispensary.findOne({ email })
  .then( searchResult => {
    if ( !searchResult ) {
      return response.status(400).json({ 'message' : 'Email not registered' });
    } else {
      if ( !bcrypt.compareSync(password, searchResult.password) ) {
        return response.status(400).json({ 'message' : 'Incorrect password' });
      }
      else {
        request.session.user = searchResult;
        response.status(200).json(searchResult);
        return ;
      };
    };
  })
  .catch(err => {
    console.log(err);
    response.status(500).json({ 'message' : 'Internal server error' });
    return ;
  })
};

module.exports = {
  loginDispensary,
};