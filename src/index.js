require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo');

const { mongooseConnect } = require('./config/mongooseConnect');
mongooseConnect();

const MongoStore = connectMongo(session);

const app = express();

// app.set('trust proxy', true)

app.use(session({
  secret: 'keyboard cat',
  cookie : {
    maxAge : 600000,
    secure : false,
  },
  proxy : true,
  store: new MongoStore({
    mongooseConnection : mongoose.connection,
  }),
}));

app.use(cors({
  origin : ['https://bis-react.herokuapp.com'],
  credentials : true,
}));

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

const { retailerAuthRouter } = require('./routes');
app.use('/retail/', retailerAuthRouter);

const { userAuthRouter } = require('./routes');
app.use('/user/auth/', userAuthRouter);

const { userCartRouter } = require('./routes');
app.use('/user/cart/', userCartRouter);

const { userOrderRouter } = require('./routes');
app.use('/user/order', userOrderRouter);

app.listen(process.env.PORT, () => {
  console.log(
    'BIS listening on port 5000',
  );
});