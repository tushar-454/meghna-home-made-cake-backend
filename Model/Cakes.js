const { model, Schema } = require('mongoose');

const cakeSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  flavour: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  salePrice: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

const Cake = model('Cake', cakeSchema, 'cakes');
module.exports = Cake;
