const { getAllUsers } = require("../controllers/getAllUsers.js")


const allUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    if (!users) {
      return res.status(404).send("Not users yet");
    }
    return res.status(200).json(users);
  } catch {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { allUsers };