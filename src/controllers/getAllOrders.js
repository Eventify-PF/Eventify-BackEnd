const { Orders } = require("../db.js");

const getAllOrders = async (idUser) => {
  const allOrders = await Orders.findAll({ where: { UserId: idUser } });

  return allOrders;
};

module.exports = getAllOrders;
