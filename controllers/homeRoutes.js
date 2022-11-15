const router = require('express').Router();
const { User, Goal, Badge, Friend, Message } = require('../models');


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

// Renders FAQ page
//router.get('/faq', (req, res) => {
//    res.render('faq');
// });

router.get('/faq', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('login');
        return;
      }
    res.render("faq")
});

// Render's signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Profile page - includes model Goal - with the user's accountabilities

router.get('/profile', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('login');
        return;
    }

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

// single forum route (id will be :id)
router.get('/forums/id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('login');
        return;
    }
    res.render('forumPost')
})

// messages route
router.get('/messages', async (req, res) => {
    try{
        const messageData = await User.findByPk (req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Message }],
    
    });
    
        const message = messageData.get({plain:true});
       
           
        res.render("messages", {...message, logged_in: req.session.logged_in})
        
    }catch (err) {
        res.status(500).json(err);
    }
 });


//Display friend page
router.get('/friendpage', async (req, res) => {
    try{
        const friendData = await User.findByPk (req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Friend }, {model: Goal}],
    
    });
    
        const friend = friendData.get({plain:true});
       
           
        res.render("friendpage", {...friend, logged_in: req.session.logged_in})
        
    }catch (err) {
        res.status(500).json(err);
    }
    });



// display Buddy's info
/* router.get('/friend/:id', async (req, res) => {
    try{
        const friendData = await User.findOne (req.session.user_id, {
            attributes: {exclude: ['password']},
            include:[{ model: User}, { model: Goal}],
        });
        const friend = friendData.get({plain:true});
           
        res.render("friend", {...friend, logged_in: true})
    }catch (err) {
        res.status(500).json(err);
    }
    });
    //find the goal data based of the friend model */

       

module.exports = router;
