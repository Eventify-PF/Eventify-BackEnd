const { Events, EventTypes,Tickets } = require("../db");

const getDetailById = async (id) => {
  const event = await Events.findByPk(id, {
    include: [
      {
        model: EventTypes,
        attributes: ["name"],
      },

      {
        model: Tickets,
        attributes: ["id", "name", "stock", "description", "price"],
      },
    ],
  });

  if (!event || event.length === 0) {
    throw new Error("This event does not excist");
  }

  const infoEevnt = {
    id: event.id,
    title: event.title,
    location: event.location,
    date: event.date,
    description: event.description,
    image: event.image,
    status: event.status,
    eventType: event.EventType ? event.EventType.name : null,
    tickets: event.Tickets.map((ticket) => ({
      id: ticket.id,
      name: ticket.name,
      stock: ticket.stock,
      description: ticket.description,
      price: ticket.price,
    })),
  };

  return infoEevnt;
};

module.exports = {
  getDetailById,
};
