const validateEvent = (req, res, next) => {
    const { image, title, location, date, description, status } = req.body;
    if (!image) return res.status(500).json({ error: "MISSING IMAGE" });
    if (!title) return res.status(500).json({ error: "MISSING TITLE" });
    if (!location) return res.status(500).json({ error: "MISSING LOCATION" });
    if (!date) return res.status(500).json({ error: "MISSING DATE" });
    if (!description)
      return res.status(500).json({ error: "MISSING DESCRIPTION" });
    if (!status) return res.status(500).json({ error: "MISSING STATUS" });
    next();
  };
  const validateTicket = (req, res, next) => {
    const { name, state, price, stock } = req.body;
    let errors = [];
    if (!name) errors.push("MISSING TITLE");
    if (!state) errors.push("MISSING STATUS");
    if (!price) errors.push("INVALID PRICE");
    if (!stock) errors.push("INVALID STOCK");
    if (errors.length) res.status(500).json({ error: errors });
    next();
  };
  
  module.exports = {validateEvent, validateTicket};