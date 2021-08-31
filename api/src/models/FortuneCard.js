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
      description: {
        type: DataTypes.VARCHAR(150),
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
