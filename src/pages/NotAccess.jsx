import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

export default function NotAccess() {
  return (
    <div className="bg-background-light min-h-screen text-[#181511] flex flex-col">
      <header className="w-full px-6 py-8 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-full text-white">
              <img src={logo} alt="T-Fresonas Logo" className="h-8 w-8" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Tenis Fresonas</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase">
            403 - No Autorizado
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            No tienes permiso para acceder a esta página.
          </h2>
          <div>
            <NavLink
              className="inline-flex items-center justify-center bg-primary hover:bg-brand-red-dark text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-[0.98] text-lg"
              to="/login"
            >
              Volver al Inicio
            </NavLink>
          </div>
        </div>
      </main>
    </div>
  );
}
