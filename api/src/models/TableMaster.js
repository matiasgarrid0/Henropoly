const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "tableMaster",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      initialmoney: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalversions: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      initialpremiums: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bankfunds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberofplayers: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};