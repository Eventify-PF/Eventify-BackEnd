const { Events, EventTypes } = require("../db");

const filterByType = async (eventType) => {
  try {
    const eventTypeInstance = await EventTypes.findOne({
      where: { id: eventType },
    });

    let filterType = await Events.findAll({
      where: {
        EventTypeId: eventTypeInstance.id,
        status: 'active',  
      },
    });
    return filterType;
  } catch (error) {
    throw new Error("Error filtering events:", error);
  }
};

const filterByDate = async (date) => {
  try {
    let filterDate = await Events.findAll({
      where: { date: date, status: 'active' },  
    });
    return filterDate;
  } catch (error) {
    throw new Error("Error filtering events:", error);
  }
};

const filterByTypeAndDate = async (eventType, date) => {
  try {
    const eventTypeInstance = await EventTypes.findOne({
      where: { id: eventType },
    });

    let filterCombined = await Events.findAll({
      where: {
        EventTypeId: eventTypeInstance.id,
        date: date,
        status: 'active',  
      },
    });
    return filterCombined;
  } catch (error) {
    throw new Error("Error filtering events:", error);
  }
};

module.exports = { filterByTypeAndDate, filterByDate, filterByType };


