const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASSWORD } = process.env;
const eticket = require("../utiles/eticket");
const formatDateToLocal = require("../utiles/formatDate");

const mailSender = async (ticketData) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });
    const emailTo = ticketData[0].userEmail;
    const result = await transporter.sendMail({
      from: `EventifyPro <${EMAIL_USER}>`,
      to: emailTo,
      subject: "EventifyPro test",
      html: ticketData
        .map((ticket) =>
          eticket({
            orderId: ticket.orderId,
            ticketId: ticket.ticketId,
            eventTitle: ticket.eventTitle,
            title: ticket.title,
            date: formatDateToLocal(ticket.eventDate),
            location: ticket.eventLocation,
            eventImage: ticket.eventImage,
          })
        )
        .join(""),
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = mailSender;
