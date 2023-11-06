const mercadopago = require('mercadopago')
const token = "TEST-2582472983132421-110118-0abd587eddf3f7796cc98c1441900444-1531566517";
const createOrder = async (id,name,price,description,image,quantity) =>{
    mercadopago.configure({
        access_token:token
    })

    const placeOrder = await mercadopago.preferences.create({
        items:[
            {
                id,
                title: name,
                unit_price: parseFloat(price),
                currency_id: "ARS",
                picture_url: image,
                description: description,
                quantity: quantity,
            },

        ],
        back_urls:{
            failure:"",//url donde se dirige el usuario en caso de failure
            pending:"http://localhost:3001/mercadoPago/pending",//url donde se dirige el usuario en caso de pending
            success:"http://localhost:3001/mercadoPago/success",//url donde se dirige el usuario en caso de success
        }
    })
    const order = placeOrder.body;

    return order
//mapear los tickets que estan asociados a un evento y a esos tickets le hacemos la orden de compra
// init_point: la propiedad de donde se saca la url que redirecciona al pago
};
module.exports = createOrder;