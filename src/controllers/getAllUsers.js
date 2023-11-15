const { Users } = require("../db");

const getAllUsers = async () => {
  try {
    const users = await Users.findAll();
    if (!users) {
      return "There is no users yet";
    }
    return users;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAllUsers };