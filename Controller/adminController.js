const Admin = require('../Model/Admin');
const Cake = require('../Model/Cakes');
const Order = require('../Model/Order');

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
 * here addacake add a cake in database
 */
const addaCake = async (req, res, next) => {
  try {
    const { name, description, image, flavour, price, salePrice, category } =
      req.body;
    const cake = new Cake({
      name,
      description,
      image,
      flavour,
      price,
      salePrice,
      category,
    });
    await cake.save();
    res.status(201).json({ message: 'success' });
  } catch (error) {
    next(error);
  }
};

/**
 * delete a cake using cake id
 */
const deleteaCake = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Cake.deleteOne({ _id: id });
    res.status(200).json({ message: 'success' });
  } catch (error) {
    next(error);
  }
};
/**
 * here getAllOrders orders get all order from database
 */
const getAllOrders = async (_req, res, next) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json({ message: 'success', data: allOrders });
  } catch (error) {
    next(error);
  }
};

/**
 * here updateOrderInfo update orders object infromation
 */
const updateOrderInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { deliveryMan, orderStatus, paymentStatus } = req.body;
    const order = await Order.findById(id);
    order.deliveryMan = deliveryMan ?? order.deliveryMan;
    order.orderStatus = orderStatus ?? order.orderStatus;
    order.paymentStatus = paymentStatus ?? order.paymentStatus;
    await order.save();
    res.status(200).json({ message: 'success', data: order });
  } catch (error) {
    next(error);
  }
};

/**
 * here updateCakeInfo update cakes object infromation
 */
const updateCakeInfo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, description, image, flavour, price, salePrice, category } =
      req.body;
    const cake = await Cake.findById(id);
    cake.name = name ?? cake.name;
    cake.description = description ?? cake.description;
    cake.image = image ?? cake.image;
    cake.flavour = flavour ?? cake.flavour;
    cake.price = price ?? cake.price;
    cake.salePrice = salePrice ?? cake.salePrice;
    cake.category = category ?? cake.category;
    await cake.save();
    res.status(200).json({ message: 'success', data: cake });
  } catch (error) {
    next(error);
  }
};

/**
 * adminCredentials for admin panel login
 */
const adminCredentials = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const adminCredentials = await Admin.find();
    console.log(adminCredentials[0]);
    const { email: adminEmail, password: adminPassword } = adminCredentials[0];
    console.log(adminEmail, adminPassword);
    if (adminEmail === email && adminPassword === password) {
      res.status(200).json({ message: 'success' });
    }
    res.status(200).json({ message: 'wrong' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCakes,
  deleteaCake,
  addaCake,
  getAllOrders,
  updateOrderInfo,
  updateCakeInfo,
  adminCredentials,
};
