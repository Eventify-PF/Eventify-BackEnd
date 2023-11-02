const { Events, Tickets } = require("../db");

const createTicket = async (name, price, stock, description, image, state, events) => {
  try {
    const eventInstance = await Events.findOne({
      where: { title: events },
    });

    if (!eventInstance) {
      throw new Error("Event does not exist");
    }

    const newTicket = await Tickets.create({
      name,
      price,
      stock,
      description,
      image,
      state,
      EventId: eventInstance.id,
    });

    const eventData = {
      id: eventInstance.id,
      title: eventInstance.title,
    };

    return {  ticket: [newTicket, eventData] }
 
  } catch (error) {
    throw new Error("Unable to create this ticket: " + error.message);
  }
};

module.exports = { createTicket };
