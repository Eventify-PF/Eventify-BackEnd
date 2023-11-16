const { findTicketById } = require("../controllers/findTicketById");

const findTicketByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await findTicketById(id);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findTicketByIdHandler,
};
