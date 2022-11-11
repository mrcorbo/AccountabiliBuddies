const sequelize = require('../config/connection');
const { User, Goal, Badge, Message, Buddy } = require('../models');

const userData = require('./userData.json');
const goalData = require('./goalData.json');
const badgeData = require('./badgeData.json');
const messageData = require('./messageData.json');
const buddyData = require('./buddyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

   await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

    await Goal.bulkCreate(goalData)
    await Badge.bulkCreate(badgeData)
    await Message.bulkCreate(messageData)
    await Buddy.bulkCreate(buddyData)
  

  process.exit(0);
};

seedDatabase();
