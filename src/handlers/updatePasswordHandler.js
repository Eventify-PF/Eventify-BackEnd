const { updatePassword } = require("../controllers/updatePassword");

const updatePasswordHandler = async (req, res) => {
  const { id, password, newPassword, newPasswordCopy } = req.body;

  try {
    const newUser = await updatePassword(
      id,
      password,
      newPassword,
      newPasswordCopy
    );
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updatePasswordHandler };
