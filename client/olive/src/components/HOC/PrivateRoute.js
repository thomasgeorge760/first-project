import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = (props) => {
    const userToken = window.localStorage.getItem('userToken');

    if(userToken)
    return <Outlet {...props}/>
    else
    return <Navigate to="/signin" />
}

export default PrivateRoute;