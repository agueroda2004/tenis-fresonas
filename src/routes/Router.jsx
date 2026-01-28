import React from "react";
import { createBrowserRouter } from "react-router";
import SneakerDetail from "../pages/SneakerDetail";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NoFound from "../pages/NoFound";

export const Router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sneaker/:id", element: <SneakerDetail /> },
  // Falta agregar una ruta para manejar rutas no encontradas
  { path: "*", element: <NoFound /> },
  { path: "login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
