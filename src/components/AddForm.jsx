import React, { useEffect, useRef, useState } from "react";
import { BRANDS } from "../data/brands";
import UseMoneyCRC from "../hooks/UseMoneyCRC";
import toast from "react-hot-toast";
import { extracPathFromUrl, optimizeImage } from "../utils/imageUtils";
import {
  addSneaker,
  updateSneakerImage,
  updateSneakerService,
} from "../service/sneakerService";
import { deleteImageStorage, uploadImage } from "../service/imageService";
import SpinLoading from "./SpinLoading";

export default function AddForm({
  onClose,
  updateSneaker,
  setSneakers,
  sneakers,
}) {
  const fileInputRef = useRef(null);
  const [sneaker, setSneaker] = useState(
    updateSneaker
      ? {
          ...updateSneaker,
          modelName: updateSneaker.nameModel,
          coverURL: null,
          imageURL: updateSneaker.image_url,
        }
      : {
          coverURL: null,
          imageURL: "",
          modelName: "",
          brand: "",
        },
  );
  const [coverPreviewUrl, setCoverPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const money = UseMoneyCRC(updateSneaker ? updateSneaker.price : 0);

  // Funcion para manejar la seleccion de la imagen de portada
  async function handlePickCover(file) {
    if (!file) return;

    if (!file.type?.startsWith("image/")) {
      toast.error("Por favor selecciona un archivo de imagen válido.");
      return;
    }

    const optimizedFile = await optimizeImage(file);

    setSneaker((b) => ({ ...b, coverURL: optimizedFile }));

    const url = URL.createObjectURL(optimizedFile);
    setCoverPreviewUrl(url);
  }

  function clearAll() {
    setSneaker({
      coverURL: null,
      imageURL: "",
      modelName: "",
      brand: "",
    });
    setCoverPreviewUrl(null);
    money.reset();
  }

  async function handleAddSneaker(e) {
    e.preventDefault();

    if (!sneaker.coverURL && !updateSneaker?.id) {
      toast.error("La imagen del tenis es obligatoria");
      return;
    }
    if (!sneaker.modelName.trim()) {
      toast.error("El nombre del modelo es obligatorio");
      return;
    }
    if (!sneaker.brand.trim()) {
      toast.error("La marca del tenis es obligatoria");
      return;
    }
    if (!money.value) {
      toast.error("El precio del tenis es obligatorio");
      return;
    }

    try {
      setIsLoading(true);
      const sneakerToAdd = {
        nameModel: sneaker.modelName.trim(),
        brand: sneaker.brand.trim(),
        price: money.value,
        image_url: updateSneaker ? (updateSneaker.image_url ?? "") : "",
      };
      console.log(sneakerToAdd);

      if (updateSneaker?.id) {
        const updateSneakerData = await updateSneakerService(
          sneakerToAdd,
          updateSneaker.id,
        );

        if (sneaker.coverURL) {
          console.log("Entramos aqui");
          console.log(updateSneaker.image_url);
          const imagePath = extracPathFromUrl(updateSneaker.image_url);
          console.log(imagePath);
          if (imagePath) await deleteImageStorage(imagePath);

          const sneakerNewImageURL = await uploadImage(sneaker.coverURL);
          await updateSneakerImage(updateSneaker.id, sneakerNewImageURL);
          setSneaker((b) => ({ ...b, imageURL: sneakerNewImageURL }));
        }

        setSneakers((prevSneakers) =>
          prevSneakers.map((sneakerItem) =>
            sneakerItem.id === updateSneaker.id
              ? {
                  ...sneakerItem,
                  ...updateSneakerData,
                  image_url: sneaker.imageURL,
                }
              : sneakerItem,
          ),
        );

        onClose();
        toast.success("¡Tenis actualizado con éxito!");
        clearAll();
      } else {
        const newSneaker = await addSneaker(sneakerToAdd);

        const sneakerImageURL = await uploadImage(sneaker.coverURL);
        await updateSneakerImage(newSneaker.id, sneakerImageURL);

        setSneaker((b) => ({ ...b, imageURL: sneakerImageURL }));

        setSneakers([
          ...sneakers,
          { ...newSneaker, image_url: sneakerImageURL },
        ]);
        toast.success("¡Tenis agregado con éxito!");
        onClose();
        clearAll();
      }
    } catch (error) {
      toast.error("Error al agregar el tenis. Inténtalo de nuevo.");
      console.log(error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  }

  // Funcion para limpiar la URL de previsualizacion cuando el componente se desmonta o cambia la imagen
  useEffect(() => {
    return () => {
      if (coverPreviewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(coverPreviewUrl);
      }
    };
  }, [coverPreviewUrl]);

  return (
    <>
      <div className="p-6 border-b border-accent-pink flex items-center justify-between">
        <h3 className="text-2xl font-black text-gray-900">
          Agregar Nuevo Tenis
        </h3>
        <button
          className="text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <form className="p-6 space-y-6" onSubmit={handleAddSneaker}>
        {/* ! */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Imagen del Producto
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handlePickCover(e.target.files?.[0])}
          />

          <div
            className="border border-accent-pink bg-white rounded-xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-pink-50 transition-colors  min-h-85 relative"
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files?.[0];
              handlePickCover(file);
            }}
          >
            {coverPreviewUrl ? (
              <img
                src={coverPreviewUrl}
                alt="Cover preview"
                className="w-full h-full object-cover rounded-xl absolute inset-0"
              />
            ) : updateSneaker ? (
              <img
                src={updateSneaker.image_url}
                alt="Cover preview"
                className="w-full h-full object-cover rounded-xl absolute inset-0"
              />
            ) : (
              <>
                <span className="material-symbols-outlined text-primary text-4xl">
                  cloud_upload
                </span>
                <span className="text-sm text-gray-600 font-medium">
                  Click para subir o arrastrar imagen
                </span>
                <span className="text-xs text-gray-400">
                  PNG, JPG hasta 5MB
                </span>
              </>
            )}
          </div>
        </div>
        {/*  */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Nombre del Modelo
            </label>
            <input
              className="w-full border-accent-pink rounded-lg  focus:border-primary px-4 py-2 outline-none focus:ring-1 focus:ring-primary"
              placeholder="Ej. Runner Pro Max"
              type="text"
              onChange={(e) =>
                setSneaker({ ...sneaker, modelName: e.target.value })
              }
              value={sneaker.modelName}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Marca
              </label>
              <select
                className="w-full border-accent-pink rounded-lg focus:ring-primary focus:ring-1 px-4 py-2 outline-none text-gray-700"
                onChange={(e) =>
                  setSneaker({ ...sneaker, brand: e.target.value })
                }
                value={sneaker.brand}
              >
                <option value="">Seleccionar marca</option>
                {BRANDS.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Precio
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ₡
                </span>
                <input
                  className="w-full pl-7 border-accent-pink rounded-lg focus:ring-primary focus:ring-1 py-2 outline-none"
                  placeholder="0.00"
                  type="text"
                  min={0}
                  value={money.formatted}
                  onChange={money.onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 pt-4">
          <button
            className="text-gray-500 font-semibold hover:text-gray-700 transition-colors px-4 py-2 cursor-pointer"
            type="button"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            type="submit"
          >
            {isLoading && <SpinLoading className="text-white" />}
            {isLoading
              ? updateSneaker?.id
                ? "Actualizando..."
                : "Guardando..."
              : "Guardar"}
          </button>
        </div>
      </form>
    </>
  );
}
