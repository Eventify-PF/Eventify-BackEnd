const { Comments } = require("../../db");

let deleteComment = async (id) => {
  let toDelete = await Comments.findOne({ where: { id: id } });
  if (!toDelete) {
    throw new Error("Comment not found");
  }
  await toDelete.destroy();
  return `Comment ${toDelete.comment} successfully removed`;
};

module.exports = { deleteComment };