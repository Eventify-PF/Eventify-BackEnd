const axios = require("axios");
const { Events } = require("../db");
const {Op} = require("sequelize")

const URL = "http://localhost:5000/Eventos/";

const getEvents = async () => {
  const check = await Events.findAll();
  if (check.length === 0) {
    const apiEventsRaw = (await axios.get(URL)).data;
    const apiEventsNew = apiEventsRaw.map((event) => {
      const { id, ...rest } = event;
      return { ...rest };
    });

    await Events.bulkCreate(apiEventsNew);
  }
  return check;
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
