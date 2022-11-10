const router = require('express').Router();
const { Goal } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates new goal
router.post('/', withAuth, async (req, res) => {
    try {
      const createNewGoal = await Goal.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(createNewGoal);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;