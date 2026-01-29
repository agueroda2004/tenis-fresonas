import React from "react";
import { createBrowserRouter } from "react-router";
import SneakerDetail from "../pages/SneakerDetail";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NoFound from "../pages/NoFound";
import NotMobile from "../pages/NotMobile";
import MobileOnly from "../guards/MobileOnly";
import Layout from "../layout/Layout";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <MobileOnly>
            <App />
          </MobileOnly>
        ),
      },
      {
        path: "/sneaker/:id",
        element: (
          <MobileOnly>
            <SneakerDetail />
          </MobileOnly>
        ),
      },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/not_mobile", element: <NotMobile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NoFound /> },
]);
