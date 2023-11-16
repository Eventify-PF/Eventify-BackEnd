const mercadopago = require("mercadopago");
const token =
  "TEST-2582472983132421-110118-0abd587eddf3f7796cc98c1441900444-1531566517";
const createOrder = async (items) => {
  mercadopago.configure({
    access_token: token,
  });

  const placeOrder = await mercadopago.preferences.create({
    items: items.map((item) => {
      return {
        category_id: item.userId,
        description: item.eventTitle,
        id: item.id,
        title: item.name,
        unit_price: item.price,
        picture_url: item.image,
        quantity: item.quantity,
      };
    }),
    back_urls: {
      failure: "http://localhost:3000/",
      pending: "http://localhost:3001/mercadoPago/pending",
      success: "http://localhost:3000/",
      //success:"https://main--lighthearted-entremet-b6aec9.netlify.app/admin"
    },
    notification_url:
      "https://3e0c-190-188-35-178.ngrok.io/mercadoPago/webhook",
  });
  const order = placeOrder.body.init_point;

  return order;
};
module.exports = createOrder;
