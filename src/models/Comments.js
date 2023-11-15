const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comments",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      comment : {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};