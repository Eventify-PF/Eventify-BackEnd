const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Tickets", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },{ timestamps: false });
};
