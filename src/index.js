const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const { mongooseConnect } = require('./config/mongooseConnect');
mongooseConnect();

const app = express();
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.use(cors({
  origin : ['http://localhost:3000'],
  credentials : true,
}));

const { retailerAuthRouter } = require('./routes');
app.use('/retail/', retailerAuthRouter);

const { userAuthRouter } = require('./routes');
app.use('/user/auth/', userAuthRouter);

const { userCartRouter } = require('./routes');
app.use('/user/cart/', userCartRouter);

app.listen(5000, () => {
  console.log(
    'BIS listening on port 5000',
  );
});