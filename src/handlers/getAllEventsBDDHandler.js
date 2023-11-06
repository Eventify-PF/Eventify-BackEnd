const { getAllEventsBDD } = require("../controllers/getAllEventsBDD");

const getAllEventsBDDHandler = async (req, res) => {
  try {
    const data = await getAllEventsBDD();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllEventsBDDHandler };
