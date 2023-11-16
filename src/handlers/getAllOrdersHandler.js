const getAllOrders = require("../controllers/getAllOrders");

const getAllOrdersHandler = async (req, res) => {
  try {
    const data = await getAllOrders();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllOrdersHandler };
