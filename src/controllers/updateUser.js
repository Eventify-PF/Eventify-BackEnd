const { Users } = require("../db");

const updateUser = async (
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
) => {
  const userToUpdate = await Users.findByPk(id);

  let updateData = {};
  if (!userToUpdate) {
    throw new Error("User not found");
  }
  if (password2 !== undefined) {
    if (userToUpdate.password === password2) {
      if (newPassword !== userToUpdate.password) {
        updateData.password = newPassword;
      } else throw new Error("The new password and the old one is the same");
    } else throw new Error("The password is not the same");
  }
  if (name && name !== "") {
    updateData.name = name;
  }
  if (lastname && lastname !== "") {
    updateData.lastname = lastname;
  }
  if (location && location !== "") {
    updateData.location = location;
  }
  if (phone && phone !== "") {
    updateData.phone = phone;
  }

  if (isAdmin !== undefined) {
    updateData.isAdmin = isAdmin;
  }

  const userUpdated = await userToUpdate.update(updateData);
  return userUpdated;
};

module.exports = { updateUser };
