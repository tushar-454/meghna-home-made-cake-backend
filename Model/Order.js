const { model, Schema } = require('mongoose');

const orderSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  wishText: {
    type: String,
    require: true,
  },
  instruction: {
    type: String,
    require: true,
  },
  orderItem: {
    type: [
      {
        name: String,
        flavour: String,
        quentity: Number,
      },
    ],
    require: true,
  },
  deliveryCharge: {
    type: Number,
    require: true,
  },
  totalMoney: {
    type: Number,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
  nitTotal: {
    type: Number,
    require: true,
  },
  paymentMethod: {
    type: String,
    require: true,
  },
  deliveryMan: {
    type: {
      name: String,
      mobileNumber: String,
    },
    require: true,
  },
  orderStatus: {
    type: [String],
    require: true,
  },
  paymentStatus: {
    type: String,
    require: true,
  },
  confirmationCode: {
    type: Number,
    require: true,
  },
});

const Order = model('Order', orderSchema, 'orders');
module.exports = Order;
