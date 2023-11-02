const {createEventTypes} = require("../controllers/createEventTypes");

const createEventTypesHandler = async (req, res) => {
    const { name } = req.body;
    try {
        const newEventType = await createEventTypes(name);
        res.status(201).json(newEventType);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {createEventTypesHandler};