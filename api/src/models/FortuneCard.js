const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "fortunecard",
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
