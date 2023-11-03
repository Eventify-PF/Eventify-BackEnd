const successPaymentHandler = async (req, res) => {
    res.status(200).json({ message: "Pago exitoso" });
    };

module.exports = successPaymentHandler;