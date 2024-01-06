const { model, Schema } = require('mongoose');

const commentSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Comment = model('Comment', commentSchema, 'comments');
module.exports = Comment;
