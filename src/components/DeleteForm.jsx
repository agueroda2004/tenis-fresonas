import React, { useState } from "react";
import SpinLoading from "./SpinLoading";
import { useNavigate } from "react-router";
import { extracPathFromUrl } from "../utils/imageUtils";
import { deleteImageStorage } from "../service/imageService";
import { deleteSneaker } from "../service/sneakerService";
import toast from "react-hot-toast";

export default function DeleteForm({
  onClose,
  selectedSneaker,
  setSneakers,
  sneakers,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  async function handleDeleteSneaker() {
    const imagePath = extracPathFromUrl(selectedSneaker.image_url);
    try {
      setIsLoading(true);
      if (imagePath) await deleteImageStorage(imagePath);

      await deleteSneaker(selectedSneaker.id);
      onClose();
      setSneakers(sneakers.filter((s) => s.id !== selectedSneaker.id));
      nav("/dashboard");
      toast.success("Tenis eliminado exitosamente");
    } catch (error) {
      toast.error("Error al eliminar el tenis. Por favor, inténtalo de nuevo.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 text-center">
      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-strawberry-red text-4xl">
          warning
        </span>
      </div>
      <h3 className="text-2xl font-black text-gray-900 mb-2">
        ¿Eliminar este producto?
      </h3>
      <div className="flex items-center justify-center gap-3 my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <div
          className="w-12 h-12 rounded-lg bg-gray-200 bg-cover bg-center shadow-sm"
          style={{
            backgroundImage: `url('${selectedSneaker?.image_url}')`,
          }}
        ></div>
        <span className="font-bold text-gray-900">
          {selectedSneaker?.nameModel}
        </span>
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Esta acción no se puede deshacer. ¿Estás seguro de que quieres eliminar
        este tenis?
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          className="flex-1 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button
          className="flex-1 px-6 py-3 rounded-xl bg-strawberry-red text-white font-bold hover:bg-red-700/50 transition-all shadow-lg shadow-strawberry-red/20 active:scale-95 bg-red-700 cursor-pointer flex items-center justify-center gap-2"
          onClick={handleDeleteSneaker}
        >
          {isLoading && <SpinLoading className="text-white" />}
          {isLoading ? "Eliminando..." : "Eliminar"}
        </button>
      </div>
    </div>
  );
}
