const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "player",
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
      properties: {
        type: DataType.TEXT,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
