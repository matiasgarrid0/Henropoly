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
      state: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      funds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
