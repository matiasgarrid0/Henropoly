const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cardProperties",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      rent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aditional: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      housesPrices: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      hotelPrices: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      valueLot: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      color: {
          type: DataTypes.STRING,
          allowNull: false,
      }
    },
    { timestamps: true }
  );
};
