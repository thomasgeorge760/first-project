import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = (props) => {
    const adminToken = window.localStorage.getItem('adminToken');

    if(adminToken)
    return <Outlet {...props}/>
    else
    return <Navigate to="/signin" />
}

export default PrivateRoute;