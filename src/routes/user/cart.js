const express = require('express');
const userCartRouter = express.Router();

const {
  addProductToCart,
  removeProductFromCart,
  getCurrentCart,
  clearCart,
} = require('../../controllers/cart');

userCartRouter.post('/add', addProductToCart);
userCartRouter.post('/remove', removeProductFromCart);
userCartRouter.post('/clear', clearCart);
userCartRouter.get('/current-cart', getCurrentCart);

module.exports = {
  userCartRouter,
};