const mercadopago = require("mercadopago");
const { Ticket, Event, TicketUnits, Orders } = require("../db");

const webHook = async (payment) => {
  console.log(payment["data.id"]); //id de orden de compra
  if (payment.type == "payment") {
    const data = await mercadopago.payment.findById(payment["data.id"]);

    const items = data.body.additional_info.items;

    if (data.body.status == "approved") {
      const dataCreate = await Orders.bulkCreate(
        items.map((item) => {
          return {
            ticketId: item.id,
            ticketTitle: item.title,
            quantity: item.quantity,
            price: item.unit_price,
            event: item.description,
            UserId: item.category_id,
          };
        })
      );

      for (const newOrder of dataCreate) {
        for (let i = 0; i < newOrder.quantity; i++) {
          const ticketInstance = await TicketUnits.create();
          await newOrder.addTicketUnits(ticketInstance);
        }
      }
    }

    return data;
  }
  throw new Error("No se pudo obtener el pago");
};

// const createUnitTicket = async () => {
//   try {
//     const orderInstance = await Orders.findOne({ where: {} });
//   } catch (error) {}
// };

module.exports = webHook;
