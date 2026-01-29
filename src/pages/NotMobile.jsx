function NotMobile() {
  return (
    <div className="bg-background-light min-h-screen text-[#181511] flex flex-col">
      <header className="w-full px-6 py-8 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl leading-none">
                nutrition
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">T-Fresonas</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase">
            Por favor usa un dispositivo móvil
          </h2>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Está aplicación está optimizada para dispositivos móviles. Por
            favor, accede desde un smartphone o tableta para una mejor
            experiencia.
          </h2>
        </div>
      </main>
      <footer className="w-full py-8 text-center text-sm text-gray-500">
        <p>© 2024 T-Fresonas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default NotMobile;
