const router = require("express").Router();
const { Friend, User } = require("../../models");
const withAuth = require("../../utils/auth");

// 
router.post("/", withAuth, async (req, res) => {

  try {
    const friend = await User.findOne({where:{email:req.body.email}})
    const addNewFriend = await Friend.create({
      friend_id: friend.id,
      user_id: req.session.user_id,
    });

    res.status(200).json(addNewFriend);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
