import React from 'react';
import {Navigate, navigate,Outlet} from 'react-router-dom';
const PrivateComponent=()=>{
    const auth=localStorage.getItem('userDetail')
    // return auth?<Outlet/>:<Navigate to="/signup"/>
}

export default PrivateComponent
