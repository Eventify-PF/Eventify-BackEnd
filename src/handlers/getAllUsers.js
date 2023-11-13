const { Users } = require("../db");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();

    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ error: "No hay usuarios encontrados" });
    }
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { getAllUsers };