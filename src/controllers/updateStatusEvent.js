const { Events } = require("../db");

const updateStatusEvent = async (id) => {
  const eventToUpdate = await Events.findByPk(id);
  if (eventToUpdate) {
    if (eventToUpdate.status === "active") eventToUpdate.status = "inactive";
    else eventToUpdate.status = "active";
    await eventToUpdate.save();
    return eventToUpdate;
  } else {
    throw new Error("Event not found");
  }
};

module.exports = { updateStatusEvent };
