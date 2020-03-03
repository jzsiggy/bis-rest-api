const { User } = require('../../models/User');

const clearCart = async (request , response , next) => {
  const currentUser = request.session.user;
  if ( !currentUser ) {
    return response.status(400).json({ 'Message' : 'User not logged in' });
  } else {
    User.findOneAndUpdate(
      { 'email' : currentUser.email },
      { 'cart' : [] },
      { new : true }
    )
    .then(result => {
      request.session.user = result;
      response.status(200).json(result.cart);
    })
    .catch(err => {
      response.status(400).json({ 'Message' : 'Server error' });
    });
  };
};

module.exports = {
  clearCart,
};