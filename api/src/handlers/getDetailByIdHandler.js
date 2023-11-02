const { getDetailById } = require("../controllers/getDetailById");

const getDetailByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getDetailById(id);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDetailByIdHandler,
};
