import { createContext, useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export default function PrivateRoute() {

    const [user, setUser] = useState({name: "", isAuthenticated: false});

    const login = (userName, passwd) => {
      return new Promise((resolve, reject) => {
      if( passwd === "monday1" ) {
        setUser({name: userName, isAuthenticated: true})
        resolve("sucess");
      } else {
        reject("invalid credentials");
      }
      })
    }

    //let auth = {'token':false}
    let myLogin = login('henninb', 'monday1');
    return(
        // auth.token ? <Outlet /> : <Navigate to="/login" />
        user.isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}
