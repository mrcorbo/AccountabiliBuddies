const router = require("express").Router();
const { Buddy, User } = require("../../models");
const withAuth = require("../../utils/auth");

// 
router.post("/", withAuth, async (req, res) => {

  try {
    const buddy = await User.findOne({where:{email:req.body.email}})
    const addNewBuddy = await Buddy.create({
      buddy_id: buddy.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(addNewBuddy);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
