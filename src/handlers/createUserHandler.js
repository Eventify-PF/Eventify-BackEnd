const { createUser } = require("../controllers/createUser");

const createUserHandler = async (req, res) => {
  const { name, lastname, email, password, location, phone, isAdmin } =
    req.body;
  try {
    const newUser = await createUser(
      name,
      lastname,
      email,
      password,
      location,
      phone,
      isAdmin
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUserHandler };
