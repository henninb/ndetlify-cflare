import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";
import HockeyScores from "./HockeyScores";
import Home from "./Home";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/nhl" element={<HockeyScores />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
