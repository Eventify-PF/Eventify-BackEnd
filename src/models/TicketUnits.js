const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TicketUnits",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    },
    { timestamps: false }
  );
};
