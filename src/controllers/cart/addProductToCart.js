const { User } = require('../../models/User');

const addProductToCart = (request , response , next) => {

  const currentUser = request.session.user;

  if (!currentUser) {
    response.status(400).json({'message' : 'Must be logged in to add a product to your cart.'})
    return ;
  };

  const { product } = request.body;

  User.findOneAndUpdate(
    { 'email' : currentUser.email },
    {
      $push : {
          cart : product,
      },
    },
    { new : true }
  )
  .then(result => {
    request.session.user = result;
    return response.status(200).json(result.cart);
  })
  .catch(err => {
    return response.status(400).json({ 'message' : 'Server Error' })
  });
};

module.exports = {
  addProductToCart,
};