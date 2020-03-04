const { retailerAuthRouter } = require('./retailer/auth');
const { userAuthRouter } = require('./user/auth');
const { userCartRouter } = require('./user/cart');
const { userOrderRouter } = require('./user/order');

module.exports = {
  retailerAuthRouter,
  userAuthRouter,
  userCartRouter,
  userOrderRouter,
};