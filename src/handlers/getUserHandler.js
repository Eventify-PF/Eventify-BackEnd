const { getUser } = require("../controllers/getUser");

const getUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getUser(id);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUserHandler };
