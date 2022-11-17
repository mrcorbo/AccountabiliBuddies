const router = require("express").Router();
const { Goal } = require("../../models");
const withAuth = require("../../utils/auth");

// Creates new goal
router.post("/", withAuth, async (req, res) => {
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

// Get all the goals information associated with the user id 
router.get("/:user_id", withAuth, async (req, res) => {
  try {
    const arrayGoal = await Goal.findAll({where:{user_id:req.params.user_id}
    
    });
    console.log(arrayGoal);
    res.status(200).json(arrayGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Edits Goals - put route

router.put ("/:id",  withAuth, async (req, res) => {
  try {
  const goalData = await Goal.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(goalData);
}catch (err) {
  res.status(400).json(err);

  }
});
  

// Deletes Goal by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const goalData = await Goal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!goalData) {
      res.status(404).json({ message: "No goal found with this id!" });
      return;
    }

    res.status(200).json(goalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
