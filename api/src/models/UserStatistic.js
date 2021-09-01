const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "userstatistics",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      gameswon: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalgames: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      maxfunds: {
        type: DataType.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
