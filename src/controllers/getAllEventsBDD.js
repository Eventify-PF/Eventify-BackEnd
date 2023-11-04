const { Events, Tickets } = require("../db");

const getAllEventsBDD = async () => {
  const events = await Events.findAll({
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
