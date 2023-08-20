import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";
import HockeyScores from "./HockeyScores";
import Home from "./Home";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateRoute from "./PrivateRoute";
import AuthWrapper from "./AuthWrapper";
import About from "./Abount";
import Test from "./Test";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/landing" exact element={<Landing />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/test" exact element={<Test />} />
            <Route element={<ProtectedRoutes />}>
              
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/nhl" exact element={<HockeyScores />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
