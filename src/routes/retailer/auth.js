const express = require('express');
const retailerAuthRouter = express.Router();

const {
  signupDispensary,
  loginDispensary,
} = require('../../controllers/retailer')

retailerAuthRouter.post('/signup', signupDispensary);
retailerAuthRouter.post('/login' , loginDispensary);

module.exports = {
  retailerAuthRouter,
};