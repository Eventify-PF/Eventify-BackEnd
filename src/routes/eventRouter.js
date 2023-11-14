const { Router } = require("express");
// GET Handlers
const { getEventsHandler } = require("../handlers/getEventsHandler");
const { getDetailByIdHandler } = require("../handlers/getDetailByIdHandler");
// POST Handlers
const { createTicketHandler } = require("../handlers/createTicketHandler");
const { createEventHandler } = require("../handlers/createEventHandler");
const { validateEvent } = require("../utiles/validate");
// PUT Handlers
const { modifyEventHandler } = require("../handlers/modifyEventHandler");
const { modifyTicketHandler } = require("../handlers/modifyTicketHandler");
const {
  updateStatusEventHandler,
} = require("../handlers/updateStatusEventHandler");
const {
  getAllEventsBDDHandler,
} = require("../handlers/getAllEventsBDDHandler");
const { deleteEventHandler } = require("../handlers/deleteEventHandler");

const eventRouter = Router();

//Rutas
//Ruta de todos los eventos
eventRouter.get("/all", getAllEventsBDDHandler);
//Ruta de eventos con borrado logico
eventRouter.get("/", getEventsHandler);
//Ruta de modificar eventos
eventRouter.put("/", modifyEventHandler);
//Ruta para modificar tickets del evento
eventRouter.put("/ticket", modifyTicketHandler);
//Ruta para subir tickets del evento
eventRouter.post("/ticket", createTicketHandler);
//Ruta para subir un evento
eventRouter.post("/", validateEvent, createEventHandler);
//Ruta para actualizar el status de un evento
eventRouter.put("/:id", updateStatusEventHandler);
//Ruta para buscar por Id un evento
eventRouter.get("/:id", getDetailByIdHandler);
//Ruta delete pokemons
eventRouter.delete("/delete/:id", deleteEventHandler);

module.exports = eventRouter;
