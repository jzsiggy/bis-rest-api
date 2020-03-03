const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  complete : {
    type : Boolean,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {
  Order,
}