const { Orders } = require("../db.js");

const getAllOrders = async () => {
  const allOrders = await Orders.findAll();

  return allOrders;
};

module.exports = getAllOrders;
