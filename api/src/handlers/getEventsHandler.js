const { getEvents,getEventsByName } = require("../controllers/getEvents");

const getEventsHandler = async (req, res) => {
  const {name} = req.query;
  try {
    const data = name ? await getEventsByName(name) : await getEvents();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getEventsHandler };
