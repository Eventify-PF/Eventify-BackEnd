const { Events, Tickets, TicketUnits } = require("../db");

const createTicket = async (
  name,
  price,
  stock,
  description,
  image,
  state,
  event
) => {
  try {
    const eventInstance = await Events.findByPk(event)

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

    
    for(let i = 0; stock > i; i++){
      const ticketInstance = await TicketUnits.create({ status: "active"});
      await newTicket.addTicketUnits(ticketInstance);
    }

    return { ticket: [newTicket, eventData] };
  } catch (error) {
    throw new Error("Unable to create this ticket: " + error.message);
  }
};


module.exports = { createTicket };
