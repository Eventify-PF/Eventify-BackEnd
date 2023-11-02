const createOrder = require("../controllers/createPayment");

const createPaymentHandler = async (req, res) => {
    try {
        const newOrder = await createOrder()
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = createPaymentHandler;