const express = require('express');
const retailerAuthRouter = express.Router();

const {
  signupDispensary,
  loginDispensary,
} = require('../../controllers/retailer')

const { logout } = require('../../controllers/logout');

retailerAuthRouter.post('/signup', signupDispensary);
retailerAuthRouter.post('/login' , loginDispensary);
retailerAuthRouter.post('/logout' , logout);

module.exports = {
  retailerAuthRouter,
};