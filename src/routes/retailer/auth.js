const express = ('express');
const authRouter = express.Router();

const {
  signupDispensary,
  loginDispensary,
} = require('../../controllers/retailer')

authRouter.post('/signup', signupDispensary);
authRouter.post('/login' , loginDispensary);