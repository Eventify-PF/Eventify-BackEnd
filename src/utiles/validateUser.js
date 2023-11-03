const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) return res.status(500).json({ error: "MISSING EMAIL" });
  if (!password) return res.status(500).json({ error: "MISSING PASSWORD" });
  next();
};

module.exports = { validateUser };
