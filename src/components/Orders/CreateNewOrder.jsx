import React, {useState} from 'react'
import { useDataLayerValue } from '../../DataLayer';

function CreateNewOrder() {
const [{user,OrderData},dispatch] =useDataLayerValue();
const [product,setProduct]=useState("Product 1");
const [quantity, setQuantity] = useState("1");
const saveData =() =>{

    const id = (Math.floor(Math.random()*1000)).toString().concat("5e2940fdadsfhsjaf010246d41");
    //console.log(id);
    const order ={
        "id":id,
        "customer_name":user.name,
        "customer_email": user.email,
        "product":product,
        "quantity": quantity
    };
    console.log(order);
    OrderData.unshift(order);
    dispatch({
        type:"SET_NEWORDER",
        newOrder:false
    });

}


    return (
            <form className="form">
                <h1>Only Can Add Product And Quantity!!</h1>
                <div className="formData">
                    <label>Name:</label>
                    <input type="text" defaultValue={user.name} />
                </div>
                <div className="formData">
                    <label>Email:</label>
                    <input type="email" defaultValue={user.email} />
                </div>
                <div className="formData">
                    <label>Product:</label>
                    <select onChange={(e)=>setProduct(e.target.value)}>
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
                   <button className="savebtn" value="Save" onClick={()=>saveData()}>Save</button>
                </div>
            </form>
    )
}

export default CreateNewOrder
