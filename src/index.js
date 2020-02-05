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

app.use((req, res, next) => {
  console.log(req.session.user);
  next();
});

app.use(cors());

const { retailerAuthRouter } = require('./routes');
app.use('/retail/', retailerAuthRouter);

const { userAuthRouter } = require('./routes');
app.use('/user/', userAuthRouter);

app.listen(5000, () => {
  console.log(
    'BIS listening on port 5000',
  );
});