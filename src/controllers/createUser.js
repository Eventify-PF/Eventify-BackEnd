const { Users } = require("../db");

const createUser = async (
  name,
  lastname,
  email,
  password,
  location,
  phone,
  isAdmin
) => {
  try {
    const existsUser = await Users.findOne({ where: { email } });
    if (!existsUser) {
      const newUser = await Users.create({
        name,
        lastname,
        email,
        password,
        location,
        phone,
        isAdmin,
      });
      return newUser;
    } else {
      throw new Error("There is a user with this email");
    }
  } catch (error) {
    throw new Error("Unable to create this user: " + error.message);
  }
};

module.exports = { createUser };
