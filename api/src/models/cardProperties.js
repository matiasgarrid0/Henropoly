const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cardproperties",
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
