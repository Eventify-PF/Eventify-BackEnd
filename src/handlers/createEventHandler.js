const {createEvent} = require("../controllers/createEvent")
const createEventHandler = async (req, res) => {
    const { image, title, location, date, description, status, eventType } =
      req.body;

    try {
      const newEvent = await createEvent(
        title,
        location,
        date,
        description,
        image,
        status,
        eventType
      );
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {createEventHandler}