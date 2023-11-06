const { modifyTicket } = require("../controllers/modifyTicket");

const modifyTicketHandler = async (req, res) => {
  const { id, name, price, stock, description, image, state } = req.body;

  try {
    const response = await modifyTicket(
      id,
      name,
      price,
      stock,
      description,
      image,
      state
    );

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { modifyTicketHandler };
