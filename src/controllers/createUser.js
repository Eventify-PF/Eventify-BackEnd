

const { Users } = require("../db");

const createUser = async (name, email, email_verified) => {
  try {
    const [newUser, created] = await Users.findOrCreate({
      where: { email },
      defaults: { name, email_verified },
    });

    if (!created) {
      // Si no se creó un nuevo usuario (es decir, ya existe uno), envía una respuesta personalizada
      return "Este usuario ya está registrado.";
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Unable to create this user: " + error.message);
  }
};

module.exports = { createUser };



