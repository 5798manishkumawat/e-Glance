import React from 'react'
import "./Sidebar.css"
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from '../../DataLayer';

function Sidebar() {
    const [{user},dispatch]=useDataLayerValue();
    // console.log(user);


    return (
        <div className="sidebar">
            <div className="sidebar_profile">
            <img src={user.imageUrl} alt="" />
            <h4 className="title">{user.name}</h4>
			</div>
            <hr />
            <div className="newOrder" onClick={()=>{
                  dispatch({
                      type:"SET_NEWORDER",
                      newOrder:true,
                  })
            }}>
                <h4>Create New Order</h4>
            </div>
            <hr />
        </div>
    )
}

export default Sidebar
