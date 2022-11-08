const router = require('express').Router();
const { User, Goal, Badge } = require('../models');

//Render's login page - once user is logged in than it will redirect to the dashboard page
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
    res.render("login")
});

//Dashboard page - includes model Goal - with the user's accountabilities

router.get('/dashboard', async (req, res) => {
    try{
    const userData = await User.findByPk (req.session.user_id, {
        attributes: {exclude: ['password']},
        include:[{ model: Goal}],
    });
    const user = userData.get({plain:true});
       
    res.render("dashboard", {...user, logged_in: true})
}catch (err) {
    res.status(500).json(err);
}
});

