const { createUser } = require("../controllers/createUser");

const createUserHandler = async (req, res) => {
  const { name, email,  email_verified } =
    req.body;

  console.log("Received a createUser request with the following data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("isAdmin, email_verified:",email_verified);

  try {
    const newUser = await createUser(
      name,
      email,
      email_verified
    );
    
    console.log("User created successfully:", newUser);

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error while creating the user:", error);

    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUserHandler };
