const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');
const buddyRoutes = require('./buddyRoutes');
const messageRoutes = require('./messageRoutes');

//References each Route - User, Post and Comment

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);
router.use('/buddies', buddyRoutes);
router.use('/messages', messageRoutes);


module.exports = router;