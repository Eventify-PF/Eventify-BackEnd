const { getEventTypes } = require("../controllers/getEventTypes");

const getEventTypesHandler = async (req, res) => {
  try {
    const data = await getEventTypes();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getEventTypesHandler };