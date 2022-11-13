// import models
const User = require('./User');
const Goal = require('./Goal');
const Badge = require('./Badge');
const ForumPost = require('./ForumPost');
const ForumComment = require('./ForumComment');
const Message = require('./Message');
const Buddy = require('./Buddy');

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
ForumComment.belongsTo(ForumPost, {
foreignKey: 'id'
});
// Comment belongsTo User
ForumComment.belongsTo(User, {
foreignKey: 'user_id'
});
// ForumPost hasMany Comment
ForumPost.hasMany(Comment, {
  foreignKey: 'id'
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
  ForumPost,
  ForumComment,
  User,
  Message,
  Buddy
};
