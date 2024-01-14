const { model, Schema } = require('mongoose');

const adminSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Admin = model('admin', adminSchema, 'admin');
module.exports = Admin;
