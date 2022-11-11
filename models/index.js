// import models
const User = require('./User');
const Goal = require('./Goal');
const Badge = require('./Badge');
const Message = require('./Message');
const Buddy = require('./Buddy');

// Badge belongsToMany User
Badge.belongsTo(User, {
foreignKey: 'user_id'
});
// User hasMany Goal
User.hasMany(Goal, {
foreignKey: 'user_id'
});
// User hasMany Badge
User.hasMany(Badge, {
  foreignKey: 'user_id'

});
// Goal belongsTo User
Goal.belongsTo(User, {
  foreignKey: 'user_id'
});

//Message relations

User.hasMany(Message, {
  foreignKey: 'user_id'

});

Message.belongsTo(User, {
  foreignKey: 'user_id'
});

//Buddy relations

User.hasMany(Buddy, {
  foreignKey: 'user_id'

});

Buddy.belongsTo (User, {
  foreignKey: 'user_id'
});



module.exports = {
  Goal,
  Badge,
  User,
  Message,
  Buddy
};
