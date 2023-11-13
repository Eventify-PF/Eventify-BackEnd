const mercadopago = require('mercadopago')
const token = "TEST-2582472983132421-110118-0abd587eddf3f7796cc98c1441900444-1531566517";
const createOrder = async (items) =>{
    mercadopago.configure({
        access_token:token
    })

    const placeOrder = await mercadopago.preferences.create({
        items: items.map((item)=>{
            return {
                id:item.id,
                title:item.name,
                unit_price:item.price,
                picture_url:item.image,
                quantity:item.quantity,
            }
        }),
        back_urls:{
            //failure:"http://localhost:3000/event",
            //pending:"http://localhost:3001/mercadoPago/pending",
            //success:"http://localhost:3000/event",
            success:"https://lighthearted-entremet-b6aec9.netlify.app/"
        },
    })
    const order = placeOrder.body.init_point;

    return order
};
module.exports = createOrder;
