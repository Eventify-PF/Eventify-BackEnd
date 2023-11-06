const validateUser = (req, res, next) => {
  const { email } = req.body;
  console.log("Request to /register received.");
  console.log("Email:", email);
  
  if (!email) return res.status(500).json({ error: "MISSING EMAIL" });
  //if (!password) return res.status(500).json({ error: "MISSING PASSWORD" });
  next();
};

module.exports = { validateUser };
