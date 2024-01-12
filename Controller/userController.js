const Cake = require('../Model/Cakes');
const Comment = require('../Model/Comment');
const Order = require('../Model/Order');

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

/**
 * this api help to create a order from user
 */
const createorder = async (req, res, next) => {
  try {
    const {
      name,
      mobile,
      address,
      date,
      wishText,
      instruction,
      orderItem,
      deliveryCharge,
      totalMoney,
      discount,
      nitTotal,
    } = req.body;
    const newOrder = new Order({
      name,
      mobile,
      address,
      date,
      wishText,
      instruction,
      orderItem,
      deliveryCharge,
      totalMoney,
      discount,
      nitTotal,
      paymentMethod: 'cod',
      deliveryMan: {
        name: '',
        mobileNumber: '',
      },
      orderStatus: 'pending',
      paymentStatus: 'unpaid',
      confirmationCode: Math.floor(Math.random() * 1000),
    });
    await newOrder.save();
    res.status(200).json({ message: 'success' });
  } catch (error) {
    next(error);
  }
};

/**
 * here getAll cakes get all cakes from database
 */
const getAllCakes = async (req, res, next) => {
  try {
    const allcakes = await Cake.find();
    res.status(200).json({ message: 'success', data: allcakes });
  } catch (error) {
    next(error);
  }
};

/**
 * here getAll cakes get all cakes from database
 */
const getCakeByCategory = async (req, res, next) => {
  try {
    const { category } = req.query;
    const allcakes = await Cake.find({ category });
    res.status(200).json({ message: 'success', data: allcakes });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createcomment,
  getcomments,
  createorder,
  getAllCakes,
  getCakeByCategory,
};
