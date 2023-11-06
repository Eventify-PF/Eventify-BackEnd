const { updateUser } = require("../controllers/updateUser");

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastname,
    email,
    password,
    password2,
    newPassword,
    location,
    phone,
    isAdmin,
  } = req.body;
  try {
    const newUser = await updateUser(
      id,
      name,
      lastname,
      email,
      password,
      password2,
      newPassword,
      location,
      phone,
      isAdmin
    );
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateUserHandler };
