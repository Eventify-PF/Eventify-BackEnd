const {Comments, Users} = require("../../db");

const createComment = async (comment, points, user) => {

    try {

        let userInstance = await Users.findOne({
            where: { email: user },
          });

        const newComment = await Comments.create({
            comment,
            points,
            userId: userInstance.id
        })
        return newComment
    } catch (error) {
        throw new Error("Unable to create this comment: " + error.message);
    }
}
module.exports = { createComment }