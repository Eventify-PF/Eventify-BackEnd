const { updateStatusEvent } = require("../controllers/updateStatusEvent");

const updateStatusEventHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const updateEvent = await updateStatusEvent(id);
    res.status(200).json(updateEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateStatusEventHandler };
