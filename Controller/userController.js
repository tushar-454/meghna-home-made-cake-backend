const Comment = require('../Model/Comment');
const { all } = require('../Routes');

/**
 * create a comment api which want name,comment,image from user
 */
const createcomment = async (req, res, next) => {
  try {
    const { name, comment, image } = req.body;
    const newComment = new Comment({
      name,
      comment,
      image,
    });
    await newComment.save();
    res.status(201).json({ message: 'success' });
  } catch (error) {
    next(error);
  }
};

/**
 * get all comment from database and this api will be use
 * admin and user both
 * isAll is query parameter by default is will be false and user get
 * just 8 comment form database and if user click on ui and send true
 * isAll query then find all comment form database.
 */
const getcomments = async (req, res, next) => {
  try {
    const { isAll } = req.query;
    const allComment = await Comment.find().limit(!!isAll ? null : 8);
    res.status(200).json({ message: 'success', data: allComment });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createcomment,
  getcomments,
};
