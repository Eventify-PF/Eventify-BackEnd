const axios = require("axios");
const { Events } = require("../db");
const { Op } = require("sequelize");

const getEvents = async () => {
  expiredEvents();
  const eventsBDD = await Events.findAll({
    where: { status: "active" },
  });

  return eventsBDD;
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
