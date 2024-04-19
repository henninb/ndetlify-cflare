import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import Home from "./components/Home";
import Login from './components/Login';
import Landing from './components/Landing';
import About from './components/About';
import Transactions from './components/Transactions';
import HockeyScores from './components/HockeyScores';
import Header from './components/Header';
import Footer from './components/Footer';

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/landing',
        element: <Landing />,
      },
      {
        path: '/transactions/:accountId',
        element: <Transactions />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/nhl',
        element: <HockeyScores />,
      },
    ]
  }

]);

rootElement.render(
  <RouterProvider router={router} ></RouterProvider>
);
