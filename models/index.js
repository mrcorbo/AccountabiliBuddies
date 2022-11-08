// import models
const User = require('./User');
const Goal = require('./Goal');
const Badge = require('./Badge');

// Badge belongsToMany User
Badge.belongsToMany(User, {
//   foreignKey: 'category_id'
});
// User hasMany Goal
User.hasMany(Goal, {
//   foreignKey: 'category_id'
});
// User hasMany Badge
User.hasMany(Badge, {

});
// Goal belongsToMany User
Goal.belongsToMany(User, {
//   through: ProductTag,
//   foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
//   foreignKey: 'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
