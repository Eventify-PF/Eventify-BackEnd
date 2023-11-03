const {Router} = require('express');
const createPaymentHandler = require("../handlers/createPaymentHandler");
const successPaymentHandler = require("../handlers/successPaymentHandler");
const pendingPaymentHandler = require("../handlers/pendingPaymentHandler");

const paymentRouter = Router();

paymentRouter.post('/', createPaymentHandler);
paymentRouter.get('/success',successPaymentHandler);
paymentRouter.get('/pending',pendingPaymentHandler);

module.exports = paymentRouter;