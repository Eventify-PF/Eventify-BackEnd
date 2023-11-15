const { Users } = require("../db.js");

const updatePassword = async (id, password, newPassword, newPasswordCopy) => {
  const updatedUser = await Users.findByPk(id);

  if (updatedUser.password === null) {
    if (newPassword === newPasswordCopy) {
      updatedUser.password = newPassword;
      await updatedUser.save();
    } else {
      throw new Error("Passwords do not match");
    }
  } else {
    if (updatedUser.password === password) {
      if (newPassword === newPasswordCopy) {
        updatedUser.password = newPassword;
        await updatedUser.save();
      } else {
        throw new Error("Passwords do not match");
      }
    } else {
      throw new Error("Incorrect current password");
    }
  }

  return updatedUser;
};

module.exports = { updatePassword };
