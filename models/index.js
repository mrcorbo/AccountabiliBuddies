// import models
const User = require('./User');
const Goal = require('./Goal');
const Badge = require('./Badge');
const ForumPost = require('./ForumPost');

// Badge belongsToMany User
Badge.belongsTo(User, {
foreignKey: 'user_id'
});
// ForumPost belongsTo User
ForumPost.belongsTo(User, {
foreignKey: 'user_id'
});
// User hasMany ForumPost
User.hasMany(ForumPost, {
foreignKey: 'user_id'
});
// Comment belongsTo ForumPost
// Comment belongsTo User
// ForumPost hasMany Comment
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

module.exports = {
  Goal,
  Badge,
  ForumPost,
  User
};
