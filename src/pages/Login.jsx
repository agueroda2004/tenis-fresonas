export default function Login() {
  return (
    <div className="bg-background-light min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm border border-accent-pink">
            <span className="material-symbols-outlined text-strawberry-red text-4xl">
              shopping_basket
            </span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            T-FRESONAS
          </h1>
          <p className="text-strawberry-green font-medium text-sm mt-1 uppercase tracking-widest">
            Panel de Administración
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 border border-accent-pink strawberry-shadow">
          <form action="#" className="space-y-6" method="POST">
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
                  className="w-full pl-11 pr-4 py-3 bg-pink-50 border-transparent rounded-xl focus:ring-2 focus:ring-strawberry-red/20 focus:border-strawberry-red text-sm transition-all"
                  id="email"
                  name="email"
                  placeholder="admin@tfresonas.com"
                  required
                  type="email"
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
                  className="w-full pl-11 pr-4 py-3 bg-pink-50 border-transparent rounded-xl focus:ring-2 focus:ring-strawberry-red/20 focus:border-strawberry-red text-sm transition-all"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
            </div>
            <div className="pt-2">
              <button
                className="w-full bg-strawberry-red hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-lg shadow-red-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
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
