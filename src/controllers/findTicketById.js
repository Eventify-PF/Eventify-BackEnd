const { Tickets } = require("../db");

const findTicketById = async (id) => {
  const ticket = Tickets.findOne({ where: { id: id } });
  return ticket;
};

module.exports = {
  findTicketById,
};
