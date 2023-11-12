const mercadopago = require("mercadopago");

const webHook = async (payment) => {
    console.log(payment["data.id"])
    if(payment.type == "payment"){
        const data = await mercadopago.payment.findById(payment["data.id"]);
        return data
    }
    throw new Error("No se pudo obtener el pago");
}
module.exports = webHook;