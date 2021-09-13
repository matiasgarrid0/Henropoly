const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cardProperty",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      versionAlpha: {
        type: DataTypes.INTEGER,
      },
      versionOne: {
        type: DataTypes.INTEGER,
      },
      versionTwo: {
        type: DataTypes.INTEGER,
      },
      versionThree: {
        type: DataTypes.INTEGER,
      },
      versionFour: {
        type: DataTypes.INTEGER,
      },
      versionPremium: {
        type: DataTypes.INTEGER,
      },
      aditional: {
        type: DataTypes.STRING,
      },
      commonVersion: {
        type: DataTypes.INTEGER,
      },
      premiumVersion: {
        type: DataTypes.INTEGER,
      },
      licenseValue: {
        type: DataTypes.INTEGER,
      },
      color: {
        type: DataTypes.STRING,
      },
      takeCheckpoint: {
        type: DataTypes.INTEGER,
      },
      twoCheckpoint: {
        type: DataTypes.INTEGER,
      },
      threeCheckpoint: {
        type: DataTypes.INTEGER,
      },
      fourCheckpoint: {
        type: DataTypes.INTEGER,
      },
      numberBox: {
        type: DataTypes.INTEGER,
      },
      owner: {
        type:DataTypes.STRING
      }
    },
    { timestamps: false }
  );
};
