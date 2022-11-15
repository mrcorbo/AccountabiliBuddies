const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Friend extends Model {

}
Friend.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
              
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },

        },

        friend_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },

        },
        goal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'goal',
                key: 'goal_id',
            },

        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'friend',
    }
);

module.exports = Friend;