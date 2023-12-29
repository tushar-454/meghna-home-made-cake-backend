const router = require('express').Router();
const adminRoutes = require('../Controller/adminController');

router.get('/getallcakes', adminRoutes.getAllCakes);

module.exports = router;
