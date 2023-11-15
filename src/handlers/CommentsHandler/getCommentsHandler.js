const { getComments } = require("../../controllers/comments/getComments");

const getCommentsHandler = async (req, res) => {
  try {
    const data = await getComments();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCommentsHandler };