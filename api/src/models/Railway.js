const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "railway",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      takeCheckpoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      twoCheckpoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      threeCheckpoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fourCheckpoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberBox: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { timestamps: true }
  );
};