const createOrder = require("../controllers/createPayment");

const createPaymentHandler = async (req, res) => {
    const listCartItems = req.body;
    try {
        const newOrder = await createOrder(listCartItems);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = createPaymentHandler;
