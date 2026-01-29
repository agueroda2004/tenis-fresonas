import { useEffect, useState } from "react";
import Olverlay from "../components/Olverlay";
import AddForm from "../components/AddForm";
import DeleteForm from "../components/DeleteForm";
import toast from "react-hot-toast";
import { getAllSneaker } from "../service/sneakerService";
import { formatter } from "../utils/moneyFormetter";
import SpinLoading from "../components/SpinLoading";
import SneakerImage from "../components/SneakerImage";
import { BRANDS } from "../data/brands";

const MODAL_TYPES = {
  CREATE_SNEAKER: "CREATE_SNEAKER",
  EDIT_SNEAKER: "EDIT_SNEAKER",
  DELETE_SNEAKER: "DELETE_SNEAKER",
};

export default function Dashboard() {
  const [activeModal, setActiveModal] = useState(null);
  const [sneakers, setSneakers] = useState([]);
  const [selectedSneaker, setSelectedSneaker] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const closeModal = () => setActiveModal(null);
  const openModal = (type) => setActiveModal(type);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        setIsLoading(true);
        const sneakersData = await getAllSneaker();
        setSneakers(sneakersData);
      } catch (error) {
        toast.error("Error al cargar los tenis. Inténtalo de nuevo.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  return (
    <>
      <div className="bg-background-light min-h-screen text-[#181511]">
        <div className="flex min-h-screen justify-center">
          <main className="flex-1 max-w-7xl p-8">
            <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-black text-gray-900">
                  Sneaker Inventory
                </h2>
                <p className="text-gray-500">
                  Manage your product catalog and stock levels.
                </p>
              </div>
              <button
                className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer"
                onClick={() => openModal(MODAL_TYPES.CREATE_SNEAKER)}
              >
                <span className="material-symbols-outlined">add</span>
                Create New Sneaker
              </button>
            </header>
            <div className="bg-white rounded-2xl border border-accent-pink shadow-sm overflow-hidden">
              <div className="p-6 border-b border-accent-pink flex flex-wrap items-center justify-between gap-4">
                <div className="relative w-full max-w-md">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-pink-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="Search inventory..."
                    type="text"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-pink-50 cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      filter_list
                    </span>
                    <select className="outline-none">
                      <option value="">All Brands</option>
                      {BRANDS.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="min-h-120 overflow-y-auto">
                <table className="w-full text-left ">
                  <thead>
                    <tr className="bg-pink-50/50 text-gray-500 text-xs uppercase tracking-widest">
                      <th className="px-6 py-4 font-bold">Model Name</th>
                      <th className="px-6 py-4 font-bold">Brand</th>
                      <th className="px-6 py-4 font-bold">Price</th>
                      <th className="px-6 py-4 font-bold text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent-pink ">
                    {isLoading && (
                      <tr>
                        <td colSpan={4} className="py-16 text-center">
                          <SpinLoading className="text-primary/80" size={100} />
                        </td>
                      </tr>
                    )}
                    {sneakers.map((sneaker) => (
                      <tr
                        className="hover:bg-pink-50/30 transition-colors border-b border-accent-pink"
                        key={sneaker.id}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <SneakerImage src={sneaker.image_url} />
                            <span className="font-bold">
                              {sneaker.nameModel}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {sneaker.brand}
                        </td>
                        <td className="px-6 py-4 font-bold text-gray-900">
                          ₡ {formatter.format(sneaker.price)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center gap-2">
                            <button
                              className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors"
                              onClick={() => {
                                openModal(MODAL_TYPES.CREATE_SNEAKER);
                                setSelectedSneaker(sneaker);
                              }}
                            >
                              <span className="material-symbols-outlined">
                                edit
                              </span>
                            </button>
                            <button
                              className="p-2 text-primary hover:bg-pink-100 rounded-lg transition-colors cursor-pointer"
                              onClick={() => {
                                openModal(MODAL_TYPES.DELETE_SNEAKER);
                                setSelectedSneaker(sneaker);
                              }}
                            >
                              <span className="material-symbols-outlined">
                                delete
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-pink-50/20 border-t border-accent-pink flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-bold">1</span> to{" "}
                  <span className="font-bold">3</span> of{" "}
                  <span className="font-bold">{sneakers.length}</span> results
                </p>
                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white disabled:opacity-50"
                    disabled
                  >
                    Previous
                  </button>

                  <button className="px-4 py-2 border border-accent-pink rounded-lg text-sm font-semibold hover:bg-white">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {activeModal && (
        <Olverlay onClose={closeModal}>
          {activeModal === MODAL_TYPES.CREATE_SNEAKER && (
            <AddForm
              onClose={closeModal}
              updateSneaker={selectedSneaker}
              sneakers={sneakers}
              setSneakers={setSneakers}
            />
          )}
          {activeModal === MODAL_TYPES.DELETE_SNEAKER && (
            <DeleteForm
              onClose={closeModal}
              selectedSneaker={selectedSneaker}
            />
          )}
        </Olverlay>
      )}
    </>
  );
}
