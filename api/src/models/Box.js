const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "communalarch",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};