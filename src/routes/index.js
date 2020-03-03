const { retailerAuthRouter } = require('./retailer/auth');
const { userAuthRouter } = require('./user/auth');
const { userCartRouter } = require('./user/cart');

module.exports = {
  retailerAuthRouter,
  userAuthRouter,
  userCartRouter,
};