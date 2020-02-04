const express = require('express');
const bodyParser = require('body-parser');

const { retailerAuthRouter } = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use('/retailer/', retailerAuthRouter);

app.listen(5000, () => {
  console.log(
    'BIS listening on port 5000',
  );
});