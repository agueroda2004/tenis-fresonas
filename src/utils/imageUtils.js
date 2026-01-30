import imageCompression from "browser-image-compression";

// Funcion para extraer la ruta de la imagen desde la URL completa
export function extracPathFromUrl(url) {
  return url.split("/storage/v1/object/public/sneaker/")[1];
}

// Funcion para optimizar imagenes antes de subirlas
export async function optimizeImage(file) {
  const options = {
    maxSizeMB: 0.5, // máx 500 KB
    maxWidthOrHeight: 800, // tamaño máximo
    useWebWorker: true,
  };

  const compressedFile = await imageCompression(file, options);
  return compressedFile;
}
