const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Ordens", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    units: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },{ timestamps: false });
};