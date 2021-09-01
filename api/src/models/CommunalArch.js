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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};