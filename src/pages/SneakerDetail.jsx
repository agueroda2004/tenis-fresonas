import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { fetchSneakerById } from "../service/sneakerService";
import SpinLoading from "../components/SpinLoading";
import SneakerImage from "../components/SneakerImage";
import { formatter } from "../utils/moneyFormetter";
import logo from "../assets/logo.png";

export default function SneakerDetail() {
  const { id } = useParams();
  const [sneaker, setSneaker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();

  const handleShare = async () => {
    const shareData = {
      title: sneaker.nameModel,
      text: `Ver ${sneaker.nameModel} - ${sneaker.brand} en Tenis Fresonas`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // usuario canceló o falló el share nativo
      }
    }

    // fallback: copiar al portapapeles
    try {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      alert("Enlace copiado al portapapeles");
    } catch {
      alert("Error al copiar el enlace");
    }
  };

  useEffect(() => {
    const fetchSneaker = async () => {
      try {
        const sneaker = await fetchSneakerById(id);
        setSneaker(sneaker);
      } catch (error) {
        console.error("Error fetching sneaker:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSneaker();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SpinLoading className="text-primary" size={60} />
      </div>
    );
  }
  if (!sneaker) {
    return nav("/not-found");
  }
  return (
    <div className="bg-background-light min-h-screen text-[#181511]">
      <div className="max-w-[500px] mx-auto bg-pale-pink min-h-screen shadow-2xl relative flex flex-col">
        <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6 flex items-center justify-between pointer-events-none">
          <NavLink
            className="pointer-events-auto w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-gray-800 shadow-sm transition-transform active:scale-90"
            to={"/"}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </NavLink>
          <button
            className="pointer-events-auto w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-gray-800 shadow-sm transition-transform active:scale-90"
            onClick={handleShare}
          >
            <span className="material-symbols-outlined">share</span>
          </button>
        </header>
        <main className="flex-1 pb-10">
          <div className="relative w-full aspect-square bg-white overflow-hidden">
            <SneakerImage src={sneaker.image_url} />
          </div>
          <div className="px-6 pt-8 space-y-6 flex justify-center flex-col">
            <div className="space-y-2">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h1 className="text-xl font-black text-gray-900 leading-tight">
                    {sneaker.nameModel}
                  </h1>
                  <p className="text-gray-500 text-base font-medium">
                    {sneaker.brand}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-primary text-3xl font-black">
                    ₡{formatter.format(sneaker.price)}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 space-y-4">
              <a
                className="w-full bg-primary hover:bg-brand-red-dark text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 "
                href={`https://ig.me/m/tenis_fresonas?text=${encodeURIComponent(
                  `Hola, quiero información del modelo ${sneaker.nameModel}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
                <span className="text-lg">Comprar en Instagram</span>
              </a>
              <p className="text-center text-xs text-gray-400 font-medium">
                Disponibilidad sujeta a stock en tienda oficial.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/50 p-4 rounded-xl border border-pink-100/50">
                <span className="material-symbols-outlined text-strawberry-green mb-2">
                  check_circle
                </span>
                <p className="text-xs text-gray-400 font-bold uppercase">
                  Calidad
                </p>
                <p className="text-xs font-bold uppercase">Garantizada</p>
              </div>
              <div className="bg-white/50 p-4 rounded-xl border border-pink-100/50">
                <span className="material-symbols-outlined text-primary mb-2">
                  local_shipping
                </span>
                <p className="text-xs text-gray-400 font-bold uppercase">
                  Envío
                </p>
                <p className="text-sm font-bold">Gratis</p>
                <p className="text-[10px] text-gray-400 mt-1 italic">
                  Aplica condiciones
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className="p-8 flex flex-col items-center gap-2 ">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded">
              <img src={logo} alt="T-Fresonas Logo" className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-bold tracking-tight">Tenis Fresonas</h2>
          </div>
        </footer>
      </div>
    </div>
  );
}
