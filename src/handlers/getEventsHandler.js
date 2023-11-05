const { getEvents,getEventsByName } = require("../controllers/getEvents");
const  { filterByTypeAndDate, filterByDate, filterByType } = require("../controllers/filtros")

const getEventsHandler = async (req, res) => {
  const { name, eventType, date } = req.query;

  if (name) {
    try {
      const data = await getEventsByName(name);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }else if (date){
    try {
      const data = await filterByDate(date);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
  } else if (eventType){
    try {
      const data = await filterByType(eventType);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    
  }else if (eventType && date) {
    try {
      const data = await filterByTypeAndDate(eventType, date);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const data = await getEvents();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = { getEventsHandler };
