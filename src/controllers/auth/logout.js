const logout = (request , response , next) => {
  request.session.user = null;
  response.status(200).json({ 'message' : 'Logout success' })
  return ;
};

module.exports = {
  logout,
};