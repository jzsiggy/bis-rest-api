const { User } = require('../../models/User');

const removeProductFromCart = (request , response , next) => {

  const currentUser = request.session.user;

  if (!currentUser) {
    response.status(400).json({'message' : 'Must be logged in to remove a product from your cart.'})
    return ;
  };

  const { product } = request.body;

  User.findOneAndUpdate(
    { 'email' : currentUser.email },
    {
      $pull : {
          cart : product,
      },
    },
    { new : true }
  )
  .then(result => {
    request.session.user = result;
    return response.status(200).json(result.cart)
  })
  .catch(err => {
    return response.status(400).json({'message' : 'Unable to remove item from cart'})
  })
};

module.exports = {
  removeProductFromCart,
};