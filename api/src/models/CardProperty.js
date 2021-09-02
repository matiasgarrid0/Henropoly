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
        allowNull: true,
      },
      versionOne: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      versionTwo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      versionThree: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      versionFour: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      versionPremium: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      aditional: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      commonVersion: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      premiumVersion: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      licenseValue: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      color: {
          type: DataTypes.STRING,
          allowNull: true,
      }
    },
    { timestamps: true }
  );
};
