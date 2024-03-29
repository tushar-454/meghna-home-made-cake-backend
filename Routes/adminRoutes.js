const router = require('express').Router();
const adminController = require('../Controller/adminController');

router.get('/getallcakes', adminController.getAllCakes);
router.post('/addacakes', adminController.addaCake);
router.delete('/deleteacake/:id', adminController.deleteaCake);
router.get('/getallorders', adminController.getAllOrders);
router.patch('/updateorderinfo/:id', adminController.updateOrderInfo);
router.patch('/updatecakeinfo/:id', adminController.updateCakeInfo);
router.post('/login', adminController.adminCredentials);

module.exports = router;
