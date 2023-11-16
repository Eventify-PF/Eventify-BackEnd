const mercadopago = require("mercadopago");
const token =
  "TEST-2582472983132421-110118-0abd587eddf3f7796cc98c1441900444-1531566517";
const createOrder = async (items) => {
  mercadopago.configure({
    access_token: token,
  });

    const placeOrder = await mercadopago.preferences.create({
        items: items.map((item)=>{
            return {
                category_id:item.userId,
                description:item.eventTitle,
                id:item.id,
                title:item.name,
                unit_price:item.price,
                picture_url:item.image,
                quantity:item.quantity,
            }
        }),
        back_urls:{
            failure:"https://lighthearted-entremet-b6aec9.netlify.app/",
            pending:"https://lighthearted-entremet-b6aec9.netlify.app/pending",
            //success:"http://localhost:3000/event",
 
            success:"https://lighthearted-entremet-b6aec9.netlify.app/"
 
 
        },
    notification_url:"https://server-eventifypro.onrender.com/mercadoPago/webhook",
    })
    const order = placeOrder.body.init_point;

  return order;
};
module.exports = createOrder;
