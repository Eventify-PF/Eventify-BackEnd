const { Events, Tickets } = require("../db");

const getAllEventsBDD = async (idUser) => {
  const events = await Events.findAll({
    where: { UserId: idUser },
    include: {
      model: Tickets,
      attributes: [
        "id",
        "name",
        "price",
        "stock",
        "description",
        "image",
        "state",
      ],
    },
  });
  return events;
};

module.exports = { getAllEventsBDD };
