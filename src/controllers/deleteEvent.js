const { Events } = require("../db");

let deleteEvent = async (id) => {
  let toDelete = await Events.findOne({ where: { id: id } });
  if (!toDelete) {
    throw new Error("Event not found");
  }
  await toDelete.destroy();
  return `Event ${toDelete.title} successfully removed`;
};

module.exports = { deleteEvent };
