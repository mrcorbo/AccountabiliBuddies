const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');


//References each Route - User, Post and Comment

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);


module.exports = router;