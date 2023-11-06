const { Router } = require("express");
const { createUserHandler } = require("../handlers/createUserHandler");
const { getUserHandler } = require("../handlers/getUserHandler");
const { updateUserHandler } = require("../handlers/updateUserHandler");

const { validateUser } = require("../utiles/validateUser");

const userRouter = Router();

userRouter.post("/register", validateUser, createUserHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.get("/:id", getUserHandler);


module.exports = userRouter;
