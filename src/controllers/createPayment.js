const mercadopago = require('mercadopago')
const token = "TEST-2582472983132421-110118-0abd587eddf3f7796cc98c1441900444-1531566517";
const createOrder = async () =>{
    mercadopago.configure({
        access_token:token
    })
    const placeOrder = await mercadopago.preferences.create({
        items:[
            {
                title: "pepe",
                unit_price: 10000,
                currency_id: "ARS",
                quantity: 1
            }
        ],
        back_urls:{
            failure:"",//url donde se dirige el usuario en caso de failure
            pending:"",//url donde se dirige el usuario en caso de pending
            success:"http//localhost:3001",//url donde se dirige el usuario en caso de success
        }
    })
    const order = placeOrder.body.init_point

    return order
//mapear los tickets que estan asociados a un evento y a esos tickets le hacemos la orden de compra
// init_point: la propiedad de donde se saca la url que redirecciona al pago
};
module.exports = createOrder;