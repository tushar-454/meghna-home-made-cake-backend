const router = require('express').Router();
const userController = require('../Controller/userController');

router.post('/createcomment', userController.createcomment);
router.get('/getcomments', userController.getcomments);
router.post('/createorder', userController.createorder);
router.get('/getallcakes', userController.getAllCakes);

module.exports = router;
