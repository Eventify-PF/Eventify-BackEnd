const { Router } = require("express");
const eventRouter = require("./eventRouter");
const eventTypeRouter = require("./eventTypesRouter");
const paymentRouter = require("./paymentRouter")

const router = Router();

router.use("/events", eventRouter);
router.use("/eventTypes", eventTypeRouter);
router.use("/mercadoPago", paymentRouter);

module.exports = router;