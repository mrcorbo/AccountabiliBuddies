const router = require("express").Router();
const { Friend, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Find another user by email and create a new friend in the database
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

// Deletes Friend by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const friendData = await Friend.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!friendData) {
      res.status(404).json({ message: "No buddy found with this id!" });
      return;
    }

    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
