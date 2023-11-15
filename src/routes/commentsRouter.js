const { Router } = require("express");

const {getCommentsHandler} = require("../handlers/CommentsHandler/getCommentsHandler")
const {createCommentHandler} = require("../handlers/CommentsHandler/createCommentHandler")
const {deleteCommentHandler} = require("../handlers/CommentsHandler/deletCommentHandler")



const commentsRouter = Router();



commentsRouter.get("/", getCommentsHandler);

commentsRouter.post("/", createCommentHandler);

commentsRouter.delete("/delet/:id", deleteCommentHandler)





module.exports = commentsRouter;