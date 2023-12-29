const router = require('express').Router();
const adminRoutes = require('./adminRoutes');

router.use('/api/v1/admin', adminRoutes);

module.exports = router;
