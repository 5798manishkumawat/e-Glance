import React, { useEffect } from 'react'
import "./Profile.css"
import Sidebar from "../Sidebar/Sidebar";
import ProfileBody from "../ProfileBody/ProfileBody";
import { useDataLayerValue } from '../../DataLayer';
import OrderData from "../../DummyData.json";

function Profile() {
    // eslint-disable-next-line no-empty-pattern
    const [{},dispatch] = useDataLayerValue();
    useEffect(()=>{
        dispatch({
            type:"SET_ORDERDATA",
            OrderData:OrderData,
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="profile">
            <Sidebar />
            <ProfileBody />            
        </div>

    )
}

export default Profile
