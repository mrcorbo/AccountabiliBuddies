const sequelize = require('../config/connection');
const { User, Goal, Badge, Message, Friend, ForumPost } = require('../models');

const userData = require('./userData.json');
const goalData = require('./goalData.json');
const badgeData = require('./badgeData.json');
const messageData = require('./messageData.json');
const friendData = require('./friendData.json');
const forumData = require('./forumData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

   await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

    await Goal.bulkCreate(goalData)
    await Badge.bulkCreate(badgeData)
    await Message.bulkCreate(messageData)
    await Friend.bulkCreate(friendData)
    await ForumPost.bulkCreate(forumData)

  process.exit(0);
};

seedDatabase();
