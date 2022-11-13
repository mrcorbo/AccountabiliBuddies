const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Message extends Model {}
Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    message_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "message",
  }
);

module.exports = Message;
