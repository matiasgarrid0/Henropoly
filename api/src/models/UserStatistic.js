const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "userStatistics",
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxfunds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
