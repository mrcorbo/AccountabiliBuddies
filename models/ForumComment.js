const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class ForumComment extends Model {

}
ForumComment.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'forumpost',
            key: 'id'
        }
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
      modelName: 'forumcomment',
    }
);

module.exports = ForumComment;