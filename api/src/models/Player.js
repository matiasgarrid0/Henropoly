const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "player",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      properties: {
        type: DataTypes.TEXT, 
        allowNull: false,
      },
      money: {
        type:DataTypes.INTEGER, 
        allowNull: false,
      },
      initialPosition: { 
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { timestamps: true }
  );
};
