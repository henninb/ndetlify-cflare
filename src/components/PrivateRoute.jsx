// import { Route, Redirect } from 'react-router-dom'
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {

    let auth = {'token':false}
    return(
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}
