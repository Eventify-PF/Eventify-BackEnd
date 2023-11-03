const { Events, EventTypes } = require("../db");
const { Op } = require("sequelize");
const { expiredEvents } = require("../utiles/expiredEvents");

const getEvents = async () => {
  expiredEvents();
  const events = await Events.findAll({
    where: { status: "active" },
    include: {
      model: EventTypes,
      attributes: ["name"],
    },
  });

  const allEvents = events.map((event) => {
    return {
      id: event.id,
      title: event.title,
      location: event.location,
      date: event.date,
      description: event.description,
      image: event.image,
      eventType: event.EventType ? event.EventType.name : null, //.toString()
    };
  });
  return allEvents;
};

const getEventsByName = async (name) => {
  const eventsFound = await Events.findAll({
    where: {
      title: { [Op.iLike]: `%${name}%` },
    },
  });
  return [...eventsFound];
};

module.exports = { getEvents, getEventsByName };
