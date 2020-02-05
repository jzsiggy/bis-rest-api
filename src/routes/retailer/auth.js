const express = require('express');
const retailerAuthRouter = express.Router();

const {
  signupDispensary,
  loginDispensary,
} = require('../../controllers/auth/retailer')

const { logout } = require('../../controllers/auth/logout');

retailerAuthRouter.post('/signup', signupDispensary);
retailerAuthRouter.post('/login' , loginDispensary);
retailerAuthRouter.post('/logout' , logout);

module.exports = {
  retailerAuthRouter,
};