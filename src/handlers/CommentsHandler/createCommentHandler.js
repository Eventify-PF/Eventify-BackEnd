const {createComment} = require("../../controllers/comments/createComment");

const createCommentHandler = async (req, res) => {
    const { comment, points, user } = req.body;
    try {
        const newComment = await createComment(comment, points, user);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {createCommentHandler};