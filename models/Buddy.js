const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Buddy extends Model {

}
Buddy.init(
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

        buddy_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },

        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'buddy',
    }
);

module.exports = Buddy;