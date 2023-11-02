const { EventTypes } = require("../db");
const { Op } = require("sequelize");

const createEventTypes = async (name) => {
  const existingEventType = await EventTypes.findOne({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  if (existingEventType) {
    throw new Error("Event type already exists");
  }
  const newEventType = await EventTypes.create({ name });

  return newEventType;
};

module.exports = { createEventTypes };
