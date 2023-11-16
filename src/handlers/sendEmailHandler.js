const { sendEmail } = require("../controllers/sendEmail");

const sendEmailHandler = async (req, res) => {
  const { email, message, name, subject } = req.body;
  try {
    const response = await sendEmail(email, message, name, subject);

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { sendEmailHandler };
