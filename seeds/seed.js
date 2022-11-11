const sequelize = require('../config/connection');
const { User, Goal, Badge, ForumPost } = require('../models');

const userData = require('./userData.json');
const goalData = require('./goalData.json');
const badgeData = require('./badgeData.json');
const forumData = require('./forumData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

   await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

    await Goal.bulkCreate(goalData)
    await Badge.bulkCreate(badgeData)
    await ForumPost.bulkCreate(forumData)

  process.exit(0);
};

seedDatabase();
