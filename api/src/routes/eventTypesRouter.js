const {Router} = require('express');
const {getEventTypesHandler} = require('../handlers/getEventTypesHandler');
const {createEventTypesHandler} = require('../handlers/createEventTypesHandler');

const eventTypeRouter = Router();

eventTypeRouter.get('/', getEventTypesHandler);
eventTypeRouter.post('/', createEventTypesHandler);


module.exports = eventTypeRouter;
