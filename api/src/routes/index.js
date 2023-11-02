const { Router } = require("express");
const eventRouter = require("./eventRouter");
const eventTypeRouter = require("./eventTypesRouter");

const router = Router();

router.use("/events", eventRouter);
router.use("/eventTypes", eventTypeRouter);

module.exports = router;
