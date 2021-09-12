const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "fortuneCard",
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
      type: {
        type: DataTypes.STRING,
      },
      value: {
        type:DataTypes.INTEGER,
      },
      owner: {
        type:DataTypes.STRING
      }
    },
    { timestamps: false }
  );
};
