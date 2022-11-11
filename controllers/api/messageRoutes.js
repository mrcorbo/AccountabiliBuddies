const router = require("express").Router();
const { Message } = require("../../models");
const withAuth = require("../../utils/auth");

// Creates new message
router.post("/", withAuth, async (req, res) => {
  try {
    const createNewMessage = await Message.create({
      ...req.body, 
      user_id: req.session.user_id,
    });

    res.status(200).json(createNewMessage);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletes Message by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const messageData = await Message.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!messageData) {
      res.status(404).json({ message: "No message found with this id!" });
      return;
    }

    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
