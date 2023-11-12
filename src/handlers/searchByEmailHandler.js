const { Users } = require("../db");

const getUserByEmail = async (req, res) => {
  const { email } = req.query;
  console.log("esta llegando el email: " + email);

  try {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};








module.exports = { getUserByEmail };