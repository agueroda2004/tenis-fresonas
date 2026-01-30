import Footer from "./layout/Footer";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";
import { fetchSneakers } from "./service/sneakerService";
import toast from "react-hot-toast";
import SpinLoading from "./components/SpinLoading";
import SneakerImage from "./components/SneakerImage";
import { formatter } from "./utils/moneyFormetter";
import { BRANDS } from "./data/brands";
import { useNavigate } from "react-router";

function App() {
  const [filters, setFilters] = useState({
    brand: "",
    nameModel: "",
  });
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [totalSneakers, setTotalSneakers] = useState(0);
  const [searchName, setSearchName] = useState("");
  const nav = useNavigate();

  const onBrandChange = (brand) => {
    setFilters((prev) => ({ ...prev, brand }));
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { sneakers, count } = await fetchSneakers(page, filters, 20);
        setSneakers(sneakers);
        setTotalSneakers(count);
      } catch {
        toast.error("Error al cargar los tenis.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [filters, page]);

  useEffect(() => {
    setPage(0);
  }, [filters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        nameModel: searchName.trim() || null,
      }));
    }, 400);

    return () => clearTimeout(timer);
  }, [searchName]);

  const onNameChange = (nameModel) => {
    setSearchName(nameModel);
  };

  return (
    <div className="bg-background-light min-h-screen text-[#181511]">
      <div className="max-w-[500px] mx-auto bg-white min-h-screen shadow-2xl relative flex flex-col">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#ffe4e6] px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full text-white shadow-sm">
                <img src={logo} alt="T-Fresonas Logo" className="h-8 w-8" />
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                Tenis Fresonas
              </h1>
            </div>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400">
                search
              </span>
            </div>
            <input
              className="block w-full pl-10 pr-3 py-3 bg-pink-50/50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary placeholder-gray-500 outline-none"
              placeholder="Buscar tus tenis favoritos..."
              type="text"
              value={searchName}
              onChange={(e) => onNameChange(e.target.value)}
            />
          </div>
        </header>
        <div className="px-4 py-4 overflow-hidden">
          <div className="flex items-center gap-3 mb-2">
            <button className="flex items-center gap-1 bg-pink-50/50 px-3 py-2 rounded-xl text-sm font-semibold">
              <span className="material-symbols-outlined text-lg">
                filter_list
              </span>
              <span>Filtro</span>
            </button>
            <div className="h-6 w-[1px] bg-pink-100"></div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              <button
                className={`px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
                  filters.brand === ""
                    ? "bg-primary text-white"
                    : "bg-pink-50/50"
                }`}
                onClick={() => onBrandChange("")}
              >
                Todos
              </button>
              {BRANDS.map((brand) => (
                <button
                  key={brand}
                  className={`px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
                    filters.brand === brand
                      ? "bg-primary text-white"
                      : "bg-pink-50/50"
                  }`}
                  onClick={() => onBrandChange(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
        <main className="px-4 flex-1 space-y-6 pb-6 min-h-screen">
          {isLoading && sneakers.length === 0 && (
            <div className="flex justify-center my-20">
              <SpinLoading className="text-primary" size={100} />
            </div>
          )}
          {!isLoading && sneakers.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No se encontraron tenis.
            </p>
          )}
          {!isLoading &&
            sneakers.length > 0 &&
            sneakers.map((sneaker) => (
              <div
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-pink-50"
                key={sneaker.id}
              >
                <div className="relative aspect-square w-full bg-[#fdf2f2] overflow-hidden">
                  <SneakerImage src={sneaker.image_url} />
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold leading-tight">
                        {sneaker.nameModel}
                      </h3>
                      <p className="text-gray-500 text-sm">{sneaker.brand}</p>
                    </div>
                    <p className="text-primary text-xl font-black">
                      ₡{formatter.format(sneaker.price)}
                    </p>
                  </div>
                  <button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    onClick={() => nav(`/sneaker/${sneaker.id}`)}
                  >
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
        </main>
        {!isLoading && sneakers.length > 0 && (
          <div className="flex justify-end gap-2 p-3 mb-10">
            <button
              className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white disabled:opacity-50 cursor-pointer disabled:cursor-auto"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            >
              Volver
            </button>
            <button
              className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white disabled:opacity-50 cursor-pointer disabled:cursor-auto"
              disabled={(page + 1) * 20 >= totalSneakers}
              onClick={() => setPage(page + 1)}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
