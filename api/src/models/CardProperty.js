const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cardProperty",
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
      versionAlpha: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      versionOne: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      versionTwo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      versionThree: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      versionFour: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      versionPremium: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      aditional: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      commonVersion: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      premiumVersion: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      licenseValue: {
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
