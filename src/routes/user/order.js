const express = require('express');
const userOrderRouter = express.Router();

const {
  createOrder,
} = require('../../controllers/order');

userOrderRouter.post('/create', createOrder);

module.exports = {
  userOrderRouter,
};