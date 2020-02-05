const express = require('express');
const userAuthRouter = express.Router();

const {
  loginUser,
  signupUser,
} = require('../../controllers/auth/user');

const { logout } = require('../../controllers/auth/logout');

userAuthRouter.post('/signup', signupUser);
userAuthRouter.post('/login', loginUser);
userAuthRouter.post('/logout', logout);


module.exports = {
  userAuthRouter,
};