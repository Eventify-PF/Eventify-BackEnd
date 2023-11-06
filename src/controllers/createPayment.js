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
            failure:"http://localhost:3000/event",//url donde se dirige el usuario en caso de failure
            pending:"http://localhost:3001/mercadoPago/pending",//url donde se dirige el usuario en caso de pending
            success:"http://localhost:3000/event",
            //success:"https://eventifypro.vercel.app/event"
        }
    })
    const order = placeOrder.body.init_point;

    return order
};
module.exports = createOrder;