const { Users } = require("../db");

const getUser = async (id) => {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new Error("This user does not exists");
  }
  return user;
};

module.exports = { getUser };
