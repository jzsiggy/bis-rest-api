const { retailerAuthRouter } = require('./retailer/auth');
const { userAuthRouter } = require('./user/auth');

module.exports = {
  retailerAuthRouter,
  userAuthRouter,
};