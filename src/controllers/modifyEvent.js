const { Events, EventTypes } = require("../db");

const modifyEvent = async (
  id,
  image,
  title,
  location,
  date,
  description,
  eventType
) => {
  try {
    const updatedEvent = await Events.findOne({ where: { id } });
    const newEventTypeId = await EventTypes.findOne({
      where: { name: eventType },
    });

    console.log(newEventTypeId.dataValues.id);

    const updates = {
      ...(title !== undefined && { title }),
      ...(image !== undefined && { image }),
      ...(date !== undefined && { date }),
      ...(location !== undefined && { location }),
      ...(description !== undefined && { description }),
      ...(newEventTypeId !== undefined && {
        EventTypeId: newEventTypeId.dataValues.id,
      }),
    };

    await updatedEvent.update(updates);

    return updatedEvent;
  } catch (error) {
    throw new Error("Unable to update this event:" + error.message);
  }
};

module.exports = { modifyEvent };
