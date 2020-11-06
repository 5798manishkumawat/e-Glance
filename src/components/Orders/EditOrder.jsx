import React, {useState,useEffect} from 'react'
import { useDataLayerValue } from '../../DataLayer';

function EditOrder({id}) {
const [{OrderData},dispatch] =useDataLayerValue();


const [order, setOrder] = useState({})
const [product,setProduct]=useState("");
const [quantity, setQuantity] = useState(0);

useEffect(() => {
    const order=OrderData.filter(item=>item.id===id);
    setProduct(order[0].product);
    setQuantity(order[0].quantity);
    setOrder(order[0]);
}, [OrderData,id])

const updateData =() =>{
   // eslint-disable-next-line array-callback-return
   OrderData.map((item) =>{
       if(item.id===id)
       {
           item.product=product;
           item.quantity=quantity;
       }
   })
   dispatch({
       type:"SET_ORDERDATA",
       OrderData:OrderData,
   })

   dispatch({
       type:"SET_EDITORDER",
       editOrder:null,
   })
}


    return (
        <div className="">
            <form className="form">
                <div className="formData">
                    <label>Name:</label>
                   <p>{order.customer_name}</p>
                </div>
                <div className="formData">
                    <label>Email:</label>
                    <p>{order.customer_email}</p>
                </div>
                <div className="formData">
                    <label>Product:</label>
                    <select defaultValue={order.product} onChange={(e)=>setProduct(e.target.value)}>
                    <option value="Product 1">Product 1</option>
                    <option value="Product 2">Product 2</option>
                    <option value="Product 3">Product 3</option>
                    </select>
                </div>
                <div className="formData">
                    <label>Quantity:</label>
                    <input type="number" defaultValue={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                </div>

                <div className="formData">
                   <button defaultValue="Update" onClick={()=>updateData()}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditOrder
