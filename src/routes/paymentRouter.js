const {Router} = require('express');
const createPaymentHandler = require("../handlers/createPaymentHandler");
const successPaymentHandler = require("../handlers/successPaymentHandler");
const pendingPaymentHandler = require("../handlers/pendingPaymentHandler");
const webHookHandler = require("../handlers/webHookHandler");

const paymentRouter = Router();

paymentRouter.post('/', createPaymentHandler);
paymentRouter.get('/success',successPaymentHandler);
paymentRouter.get('/pending',pendingPaymentHandler);
paymentRouter.post('/webhook',webHookHandler)

module.exports = paymentRouter;