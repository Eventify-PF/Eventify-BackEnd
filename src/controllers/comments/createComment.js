const { Comments, Users } = require("../../db");

const createComment = async (comment, points, users) => {
  try {
    let userInstance = await Users.findOne({
      where: { email: users },
    });

    const newComment = await Comments.create({
      comment,
      points,
      UserId: userInstance.id,
    });
    return newComment;
  } catch (error) {
    throw new Error("Unable to create this comment: " + error.message);
  }
};
module.exports = { createComment };
