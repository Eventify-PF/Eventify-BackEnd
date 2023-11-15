const { Router } = require("express");
const { createUserHandler } = require("../handlers/createUserHandler");
const { getUserHandler } = require("../handlers/getUserHandler");
const { updateUserHandler } = require("../handlers/updateUserHandler");
const { getUserByEmail } = require("../handlers/searchByEmailHandler");
const { getAllUsers } = require("../handlers/getAllUsers");

const { validateUser } = require("../utiles/validateUser");
const { updatePasswordHandler } = require("../handlers/updatePasswordHandler");
const { getAllOrdersHandler } = require("../handlers/getAllOrdersHandler");

const userRouter = Router();

userRouter.get("/orders", getAllOrdersHandler);
userRouter.post("/register", validateUser, createUserHandler);
userRouter.put("/password", updatePasswordHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.get("/:id", getUserHandler);
userRouter.get("/", getUserByEmail);
userRouter.get("/", getAllUsers);

module.exports = userRouter;
