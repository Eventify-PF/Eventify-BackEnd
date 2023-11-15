const mercadopago = require("mercadopago");
const {Ticket, Event, TicketUnits, Orders} = require("../db");


const webHook = async (payment) => {
    console.log(payment["data.id"])//id de orden de compra
    if(payment.type == "payment"){

        const data = await mercadopago.payment.findById(payment["data.id"]);

        const items = data.body.additional_info.items;

        if(data.body.status == "approved"){
         await Orders.bulkCreate(items.map((item) => {
            return {
                ticketId: item.id,
                ticketTitle: item.title,
                quantity: item.quantity,
                price: item.unit_price,
                event: item.description,
                UserId: item.category_id,
            }
        }));
      }

        return data
    }
    throw new Error("No se pudo obtener el pago");
}
module.exports = webHook;