const { addProductToCart } = require('./addProductToCart');
const { removeProductFromCart } = require('./removeProductFromCart');
const { getCurrentCart } = require('./getCurrentCart');
const { clearCart } = require('./clearCart');

module.exports = {
  addProductToCart,
  removeProductFromCart,
  getCurrentCart,
  clearCart,
};