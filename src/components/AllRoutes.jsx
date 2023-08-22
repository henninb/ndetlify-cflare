import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";
import HockeyScores from "./HockeyScores";
import Home from "./Home";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateRoute from "./PrivateRoute";
import AuthWrapper from "./AuthWrapper";
import About from "./About";
import Test from "./Test";
//import { createContext, useContext } from "react";

export default function AllRoutes() {
  //const AuthContext = createContext();
  //const AuthData = () => useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/nhl" exact element={<HockeyScores />} />
              <Route path="/about" element={<Test />} />
            </Route>
            <Route element={<PrivateRoute />}>
            </Route>
          </Routes>
          <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}
