const router = require('express').Router();
const adminRoutes = require('../Controller/adminController');

router.get('/getallcakes', adminRoutes.getAllCakes);
router.post('/addacakes', adminRoutes.addaCake);
router.get('/getallorders', adminRoutes.getAllOrders);
router.patch('/updateorderinfo', adminRoutes.updateOrderInfo);
router.patch('/updatecakeinfo/:id', adminRoutes.updateCakeInfo);

module.exports = router;
