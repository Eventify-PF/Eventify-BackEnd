const { Events, EventTypes } = require("../db");

const filterByType = async (eventType) => {
  try {
    
    const eventTypeInstance = await EventTypes.findOne({
      where: { name: eventType },   
    });
     

    
        let filterType = await Events.findAll({
            where: {
              EventTypeId: eventTypeInstance.id,
            },
        });
        return filterType;
        } catch (error) {    
          throw new Error("Error filtering events:", error);   
        }
        };

    
        const filterByDate = async (date) => {
            try {
                let filterDate = await Events.findAll({
                    where: { date: date }
                });
                return filterDate;
                
            } catch (error) {
                throw new Error("Error filtering events:", error); 
            }

    } 
    
    
    const filterByTypeAndDate = async (eventType, date) => {
        try {
            const eventTypeInstance = await EventTypes.findOne({
                where: { name: eventType },   
              });
            let filtercombinado = await Events.findAll({
                where: {
                  EventTypeId: eventTypeInstance.id,
                  date: date,
                },
              });
              return filtercombinado;
            
        } catch (error) {
            throw new Error("Error filtering events:", error);
        }
    }
    



module.exports = { filterByTypeAndDate, filterByDate, filterByType };

