const router = require("express").Router();
const { ForumPost } = require("../../models");
const withAuth = require("../../utils/auth");
const { route } = require("../homeRoutes");

// forums post route
router.post('/', async (req, res) => {
    try {
        const forumData = await ForumPost.create({...req.body, 
                user_id: req.session.user_id
              });
        res.status(200).json(forumData);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
      const forumData = await ForumPost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!forumData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }
  
      res.status(200).json(forumData);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  module.exports = router;
  
