const { Router } = require("express");
const eventRouter = require("./eventRouter");
const eventTypeRouter = require("./eventTypesRouter");
const paymentRouter = require("./paymentRouter");
const userRouter = require("./userRouter");
const commentsRouter = require("./commentsRouter")

const router = Router();

router.use("/events", eventRouter);
router.use("/eventTypes", eventTypeRouter);
router.use("/mercadoPago", paymentRouter);
router.use("/users", userRouter);
router.use("/comments", commentsRouter);
module.exports = router;
