const Cake = require('../Model/Cakes');

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
    const { name, description, flavour, price, salePrice, category } = req.body;
    const cake = new Cake({
      name,
      description,
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
 * here getAllOrders orders get all order from database
 */
const getAllOrders = async (req, res, next) => {
  //
};

/**
 * here updateOrderInfo update orders object infromation
 */
const updateOrderInfo = async (req, res, next) => {
  //
};

/**
 * here updateCakeInfo update cakes object infromation
 */
const updateCakeInfo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, description, flavour, price, salePrice, category } = req.body;
    const cake = await Cake.findById(id);
    cake.name = name ?? cake.name;
    cake.description = description ?? cake.description;
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

module.exports = {
  getAllCakes,
  addaCake,
  getAllOrders,
  updateOrderInfo,
  updateCakeInfo,
};
