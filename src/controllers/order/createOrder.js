const { Order } = require('../../models');

const createOrder = (request , response , next) => {
  const { cart , amount , deliveryAddress ,  delivered } = request.body;
  if (amount) {
    Order.create({
      cart,
      amount,
      deliveryAddress,
      delivered,
    });
    response.status(200).json({ 'message' : 'ok' })
  } else {
    response.status(400).json({ 'message' : 'no amount specified' })
  }
};

module.exports = {
  createOrder,
};