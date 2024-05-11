import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter, useParams, useSearchParams,  matchPath, useLocation, useMatchedRoute } from "react-router-dom";
import './index.css';
import Home from "./components/Home";
import Login from './components/Login';
import Landing from './components/Landing';
import About from './components/About';
import Transactions from './components/Transactions';
import HockeyScores from './components/HockeyScores';
import BasketballScores from './components/BasketballScores';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

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

function User() {
  const [searchParams, _setSearchParams] = useSearchParams();
  // let { userId } = useParams();
  const userId = searchParams.get('userId')
  const { pathname } = useLocation();
  //const route = useMatchedRoute();

  return (<div>
           <h2>User ID: {userId}</h2>
           <h2>pathname: {pathname}</h2>
         </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/landing', element: <Landing /> },
      { path: 'users/:userId', element: <User />, },
      // { path: 'users', element: <User />, },
      { path: '/transactions:accountId', element: <Transactions /> },
      { path: '/login', element: <Login /> },
      { path: '/nhl', element: <HockeyScores /> },
      { path: '/nba', element: <BasketballScores /> },
      { path: '*', element: <NotFound /> }, // Catch-all route for undefined paths
    ]
  }
]);


rootElement.render(
  <RouterProvider router={router} ></RouterProvider>
);
