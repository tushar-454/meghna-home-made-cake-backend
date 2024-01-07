const router = require('express').Router();
const userController = require('../Controller/userController');

router.post('/createcomment', userController.createcomment);
router.get('/getcomments', userController.getcomments);

module.exports = router;
