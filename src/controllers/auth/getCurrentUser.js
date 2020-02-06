const getCurrentUser = (request , response , next) => {
  response.status(200).json(request.session.user);
  return ;
};

module.exports = {
  getCurrentUser,
};