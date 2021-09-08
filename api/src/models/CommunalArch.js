const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "communalArch",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },

      name:{
        type:DataTypes.STRING,
        allowNull:false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};