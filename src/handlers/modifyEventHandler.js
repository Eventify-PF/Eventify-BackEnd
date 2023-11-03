const { modifyEvent } = require("../controllers/modifyEvent");

const modifyEventHandler = async (req, res) => {
  const { id, image, title, location, date, description, status, EventTypeId } =
    req.body;

  try {
    const response = await modifyEvent(
      id,
      image,
      title,
      location,
      date,
      description,
      status,
      EventTypeId
    );

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { modifyEventHandler };
