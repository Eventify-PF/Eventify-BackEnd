const { deleteEvent } = require("../controllers/deleteEvent");

const deleteEventHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteEvent(id);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteEventHandler,
};
