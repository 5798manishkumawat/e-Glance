import React from 'react'
import "./ProfileBody.css"
import Orders from "../Orders/Orders";
import { useDataLayerValue } from '../../DataLayer';
import CreateNewOrder from '../Orders/CreateNewOrder';
import EditOrder from '../Orders/EditOrder';
function ProfileBody() {
    // eslint-disable-next-line no-unused-vars
    const [{editOrder,newOrder,OrderData},dispatch]= useDataLayerValue();
    // console.log(editOrder);
    return (
        <div className="profileBody">
            {(newOrder===true)?<CreateNewOrder />:
            ((editOrder!==null)?<EditOrder id={editOrder} />:( 
                OrderData.map((item) => {
                return (
                    <Orders order={item} key={item.id} />
                );
            })))
           }
        </div>
    )
}

export default ProfileBody
