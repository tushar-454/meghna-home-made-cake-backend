const router = require('express').Router();
const adminRoutes = require('./adminRoutes');
const userRoutes = require('./userRoutes');

router.use('/api/v1/admin', adminRoutes);
router.use('/api/v1/user', userRoutes);

module.exports = router;
