const { deleteComment } = require("../../controllers/comments/deletComment");

const deleteCommentHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteComment(id);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteCommentHandler,
};