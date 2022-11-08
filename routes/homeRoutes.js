const router = require('express').Router();
const { User, Goal, Badge } = require('../models');

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
    res.render("login")
});