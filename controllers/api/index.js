const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');
const friendRoutes = require('./friendRoutes');
const messageRoutes = require('./messageRoutes');

//References each Route - User, Goal, Friend and Message

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);
router.use('/friends', friendRoutes);
router.use('/messages', messageRoutes);


module.exports = router;