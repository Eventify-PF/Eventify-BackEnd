const { Router } = require("express");
const { createUserHandler } = require("../handlers/createUserHandler");
const { getUserHandler } = require("../handlers/getUserHandler");
const { updateUserHandler } = require("../handlers/updateUserHandler");
const { getUserByEmail } = require("../handlers/searchByEmailHandler");
const { allUsers } = require("../handlers/getAllUsers");

const { validateUser } = require("../utiles/validateUser");
const { updatePasswordHandler } = require("../handlers/updatePasswordHandler");

const userRouter = Router();

userRouter.post("/register", validateUser, createUserHandler);
userRouter.put("/password", updatePasswordHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.get("/todos", (req, res) => {
    console.log("Recibida una solicitud para obtener todos los usuarios.");
  
    // Llama al controlador getAllUsers
    allUsers(req, res);
  });
userRouter.get("/:id", getUserHandler);
userRouter.get("/", getUserByEmail);

module.exports = userRouter;
