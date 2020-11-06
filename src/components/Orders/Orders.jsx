import React from 'react'
import "./Orders.css"
import { useDataLayerValue } from '../../DataLayer';
function Orders({order}) {

    const [{OrderData},dispatch] = useDataLayerValue();
    const removeOrder = (id) =>{
           const Orderdata= OrderData.filter(item=>item.id!==id);
           dispatch({
               type:"SET_ORDERDATA",
               OrderData:Orderdata
           })
    }

    return (
        <div className="order_container">
        <p>Customer Name: {order.customer_name}</p>
        <p>Customer Email: {order.customer_email}</p>
        <p>Product: {order.product}</p>
        <p>Quantity: {order.quantity}</p>
        <div className="buttons">
            <button onClick={()=>{
                dispatch({
                      type:"SET_EDITORDER",
                      editOrder:order.id,
                  })
                  }}>Edit</button>
            <button onClick={()=>removeOrder(order.id)}>Remove</button>
        </div>
        </div>
    )
}

export default Orders
