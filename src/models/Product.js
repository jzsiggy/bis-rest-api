const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name : {
    type : String,
  },
  retailers : [{
    type : Schema.Types.ObjectId,
    ref : 'Dispensary',
  }],
  brand : {
    type : String,
  },
  description : {
    type : String,
  },
  effects : {
    type : String,
    enum : [
      'Relaxed',
      'Euphoric',
      'Calm',
      'Happy',
      'Sleepy',
      'Pain Relief',
      'Hungry',
   ],
  },
  imageUrl : {
    type : String,
  },
  category : {
    type : [{
      type : String,
    }]
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;