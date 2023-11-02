const { EventTypes } = require("../db");

const getEventTypes = async () => {
  const allEventTypes = EventTypes.findAll();
  //const eventTypesNames = allEventTypes.map((eventType) => eventType.name);
  return allEventTypes;
};

module.exports = { getEventTypes };
