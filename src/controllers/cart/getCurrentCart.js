const getCurrentCart = async (request , response , next) => {
  const currentUser = request.session.user;
  if ( currentUser ) {
    return response.status(200).json(currentUser.cart);
  } else {
    return response.status(400).json({ 'message' : 'Not logged in' });
  }
};

module.exports = {
  getCurrentCart,
};