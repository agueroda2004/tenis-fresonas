import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [user, setUser] = useState({
    email: import.meta.env.VITE_EMAIL,
    password: "",
  });
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const envEmail = import.meta.env.VITE_EMAIL;
    const envPassword = import.meta.env.VITE_PASSWORD;

    if (!user.email) {
      toast.error("El campo de email es obligatorio");
      return;
    }
    if (!emailRegex.test(user.email)) {
      toast.error("Por favor, ingresa un email válido");
      return;
    }
    if (!user.password) {
      toast.error("El campo de contraseña es obligatorio");
      return;
    }
    if (user.email !== envEmail || user.password !== envPassword) {
      toast.error("Email o contraseña incorrectos");
      return;
    }
    toast.success("¡Inicio de sesión exitoso!");
    localStorage.setItem("isAuthenticated", "true");
    nav("/dashboard");
  };
  return (
    <div className="bg-background-light min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm border border-accent-pink">
            <img src={logo} alt="T-Fresonas Logo" className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            TENIS FRESONAS
          </h1>
          <p className="text-strawberry-green font-medium text-sm mt-1 uppercase tracking-widest">
            Panel de Administración
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 border border-accent-pink strawberry-shadow">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div className="space-y-2">
              <label
                className="block text-sm font-bold text-gray-700 ml-1"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                  mail
                </span>
                <input
                  className="w-full pl-11 pr-4 py-3 bg-pink-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:border-strawberry-red text-sm transition-all outline-none"
                  id="email"
                  name="email"
                  placeholder="admin@tfresonas.com"
                  type="text"
                  value={user.email}
                  onChange={(e) =>
                    setUser((user) => ({ ...user, email: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-bold text-gray-700 ml-1"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                  lock
                </span>
                <input
                  className="w-full pl-11 pr-4 py-3 bg-pink-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:border-strawberry-red text-sm transition-all outline-none"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((user) => ({ ...user, password: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="pt-2">
              <button
                className="w-full bg-strawberry-red bg-primary text-white font-black py-4 rounded-xl shadow-lg shadow-red-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 hover:bg-red-400 cursor-pointer"
                type="submit"
              >
                INICIAR SESIÓN
                <span className="material-symbols-outlined">login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
