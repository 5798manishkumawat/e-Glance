import React from 'react'
import "./Login.css";
import {GoogleLogin} from "react-google-login";
import { useDataLayerValue } from '../../DataLayer';
function Login() {
// eslint-disable-next-line no-unused-vars
const [{user},dispatch] = useDataLayerValue();
const responseSuccessGoogle = (response) =>{
        //console.log(response);
        dispatch({
            type:"SET_USER",
            user:response.profileObj
        });
        dispatch({
            type:"SET_TOKEN",
            token:response.accessToken
        })
}

const responseFailureGoogle = (response) =>{
    console.log("yessss");
}

    return (
        <div className="login">
            <h1>Welcome To Utilize</h1>
            <GoogleLogin 
                className="googleLogin"
                clientId="987522761760-ojcshtjvmm06uukecuj2nm192870lupb.apps.googleusercontent.com"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailureGoogle}
            />
        </div>
    )
}

export default Login
