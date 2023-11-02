const {Router} = require('express');
const createPaymentHandler = require("../handlers/createPaymentHandler");

const paymentRouter = Router();

paymentRouter.post('/', createPaymentHandler);
//paymentRouter.post()

module.exports = paymentRouter;