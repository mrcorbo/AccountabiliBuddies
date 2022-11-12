const router = require('express').Router();
const { User, Goal, Badge, Buddy, Message } = require('../models');


// Render main page
router.get('/', async (req, res) => {
    const goalData = await Goal.findAll ()
    console.log(goalData);
    const goals = goalData.map(goal => goal.get({plain:true}))
    res.render('homepage', {
        goals, 
        logged_in: req.session.logged_in});
});


//Render's login page - once user is logged in than it will redirect to the profile page
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('profile');
        return;
      }
    res.render("login")
});

// Render's signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Profile page - includes model Goal - with the user's accountabilities

router.get('/profile', async (req, res) => {
    try{
    const userData = await User.findByPk (req.session.user_id, {
        attributes: {exclude: ['password']},
        include:[{ model: Goal}],
    });
    const user = userData.get({plain:true});
       
    res.render("profile", {...user, logged_in: true})
}catch (err) {
    res.status(500).json(err);
}
});



// Display user's goal

router.get('/goal/:id', async (req, res) => {
    try{
    const goalData = await Goal.findByPk (req.params.id, {
        include:[
        {
          model:User,
        attributes: ['email'],
    },
],
});
    const goal = goalData.get({plain: true})

    res.render("goal", {...goal, logged_in: req.session.logged_in
    });
} catch (err) {
    res.status(500).json(err);
}
});

// forums route
router.get('/forums', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('login');
        return;
      }
    res.render("forums")
});

// messages route
router.get('/messages', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('login');
        return;
      }
    res.render("messages")
});

//Display buddy page
router.get('/buddy', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('login');
        return;
      }
    res.render("buddy")
});


// display buddies page
router.get('/buddy/:id', async (req, res) => {
    try{
        const buddyData = await User.findByPk (req.session.user_id, {
            attributes: {exclude: ['password']},
            include:[{ model: User}],
        });
        const buddy = buddyData.get({plain:true});
           
        res.render("buddy", {...buddy, logged_in: true})
    }catch (err) {
        res.status(500).json(err);
    }
    });
    //find the goal data based of the buddy model
module.exports = router;