const { Events, EventTypes } = require("../db");

const getDetailById = async (id) => {
  const event = await Events.findAll({
    where: {
        id: id
    },
    include: {
      model: EventTypes,
      attributes: ['name'],
  }
})

if (!event || event.length === 0) {
    throw new Error("This event does not excist");
}

  const infoEvent = event.map(event => {
    return {
     id: event.id,
     title: event.title,
     location: event.location,
     date: event.date,
     description: event.description,
     image: event.image,
     eventType: event.EventType ? event.EventType.name : null
    }
  })

  return  infoEvent[0]

};

module.exports = {
  getDetailById,
};
