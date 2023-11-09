const { Events } = require("../db");

const expiredEvents = async () => {
  try {
    const currentDate = new Date();
    //console.log("date", currentDate);
    const expiredEvents = await Events.findAll();
    expiredEvents.map(async (event) => {
      if (currentDate > event.date) event.status = "inactive";
      await event.save();
    });
  } catch (error) {
    throw new Error("There's a problem: " + error.message);
  }
};

module.exports = { expiredEvents };
