const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        user_email: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            },
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
        freezeTableName: true,
        underscored: true,
        modelName: 'buddy',
    }
);

module.exports = Buddy;