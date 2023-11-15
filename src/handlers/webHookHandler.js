const webHook = require("../controllers/webHook")

const webHookHandler = async (req, res) => {
   const payment = req.query
    try {
        const newPayment = await webHook(payment);
        console.log(newPayment.body)
        console.log(newPayment.body.additional_info.items)
        res.status(201).json(newPayment);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message});
    }

    }
module.exports = webHookHandler;