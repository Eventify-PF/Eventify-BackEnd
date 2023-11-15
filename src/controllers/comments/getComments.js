const { Comments, Users } = require("../../db")

const getComments = async () => {
    // expiredEvents();
    const comments = await Comments.findAll({
            include: {
            model: Users,
            attributes: ["name"],
          },
        }
    )


    const allComments = comments.map((comment) => {
        return {
          id: comment.id,
          comment: comment.comment,
          points: comment.points,
          user: comment.User ? comment.User.name : null, //.toString()
        };
      });

    return allComments
}

module.exports = { getComments }