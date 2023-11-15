const mercadopago = require("mercadopago");
const { Tickets, Event, TicketUnits, Orders } = require("../db");

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
        if (newOrder.ticketId) {
          const ticket = await Tickets.findOne({
            where: { id: newOrder.ticketId },
          });

          const updates = {
            stock: ticket.stock - newOrder.quantity,
            sold: ticket.sold + newOrder.quantity,
          };

          await ticket.update(updates);
          console.log(ticket);
        }
      }
    }

    return data;
  }
  throw new Error("No se pudo obtener el pago");
};

module.exports = webHook;
