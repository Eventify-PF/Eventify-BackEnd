const nodemailer = require("nodemailer");

const sendEmail = async (email, message, name, subject) => {
  console.log("Pasaron por aqui");
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "facuriminicoding@gmail.com",
      pass: "gacn hzve drip dxye",
    },
  });

  let mailOptions = {
    from: "facuriminicoding@gmail.com",
    to: "facuriminicoding@gmail.com",
    subject: subject,
    text: `Nombre: ${name} \nCorreo electrónico: ${email} \nMensaje: ${message}`,
  };
  console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error al enviar el correo electrónico");
    } else {
      console.log("Correo electrónico enviado: " + info.response);
      res.status(200).send("Correo electrónico enviado satisfactoriamente");
    }
  });
};

module.exports = { sendEmail };
