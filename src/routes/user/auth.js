const express = require('express');
const userAuthRouter = express.Router();

const {
  loginUser,
  signupUser,
} = require('../../controllers/auth/user');

const { logout } = require('../../controllers/auth/logout');
const { getCurrentUser } = require('../../controllers/auth/getCurrentUser');


userAuthRouter.post('/signup', signupUser);
userAuthRouter.post('/login', loginUser);
userAuthRouter.post('/logout', logout);
userAuthRouter.get('/current-user', getCurrentUser);

module.exports = {
  userAuthRouter,
};