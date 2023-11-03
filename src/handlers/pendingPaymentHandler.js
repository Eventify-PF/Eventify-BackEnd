const pendingPaymentHandler = async (req, res) => {
    res.status(200).json({ message: "Pago pendiente" });
    };

module.exports = pendingPaymentHandler;