const mercadopago = require("mercadopago");
const { Tickets, Events, TicketUnits, Orders, Users } = require("../db");
const mailSender = require("../utiles/nodemailer");

const webHook = async (payment) => {
  console.log(payment["data.id"]); //id de orden de compra
  if (payment.type == "payment") {
    const data = await mercadopago.payment.findById(payment["data.id"]);

    const items = data.body.additional_info.items;

    if (data.body.status == "approved") {
      const activeUser = await Users.findByPk(items[0].category_id);
      const userEmail = activeUser.dataValues.email;
      const eventTitle = items[0].description;
      console.log(eventTitle);
      const eventData = await Events.findOne({
        where: { title: eventTitle },
      });
      console.log(eventData);

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
      console.log(dataCreate);

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
        }
      }

      const ticketsToSend = dataCreate.map((item) => {
        return {
          userEmail: userEmail,
          orderId: payment["data.id"],
          ticketId: item.ticketId,
          title: item.ticketTitle,
          eventTitle: eventTitle,
          eventDate: eventData.dataValues.date,
          eventLocation: eventData.dataValues.location,
          eventImage: eventData.dataValues.image,
        };
      });
      console.log(ticketsToSend);
      await mailSender(ticketsToSend);
    }

    return data;
  }
  throw new Error("No se pudo obtener el pago");
};

module.exports = webHook;
