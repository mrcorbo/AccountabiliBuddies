const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class ForumPost extends Model {

}
ForumPost.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        subject: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        body: {
        type: DataTypes.STRING,
        allowNull: false
        },
        user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          },

      },    
    },
    {   
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'forumpost',
    }
);

module.exports = ForumPost;