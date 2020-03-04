const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  delivered : {
    type : Boolean,
  },
  deliveryAddress : {
    type : String,
  },
  amount : {
    type : Number,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {
  Order,
}