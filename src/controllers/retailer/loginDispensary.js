const bcrypt = require('bcrypt');
const { Dispensary } = require('../../models');

const loginDispensary = ( request , response , next ) => {
  const {
    email,
    password,
  } = request.body;

  Dispensary.find({ email })
  .then( searchResult => {
    if (!searchResult.length) {
      response.status(400).json({ 'message' : 'Email not registered' });
      return ;
    } else {
      if ( !bcrypt.compareSync(password, searchResult[0].password) ) {
        response.status(400).json({ 'message' : 'Incorrect password' });
        return ;
      }
      else {
        request.session.user = searchResult[0];
        response.status(200).json(searchResult[0]);
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