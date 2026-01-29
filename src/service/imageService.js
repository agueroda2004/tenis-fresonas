import { supabase } from "../lib/supabaseClient";

export async function uploadImage(file) {
  const filePath = `sneakers/${Date.now()}_${file.name}`;

  const { error } = await supabase.storage
    .from("sneaker")
    .upload(filePath, file, { contentType: file.type, upsert: false });

  if (error) throw new Error("IMAGE_UPLOAD_ERROR", { cause: error });

  const { data: image } = supabase.storage
    .from("sneaker")
    .getPublicUrl(filePath);

  return image.publicUrl;
}

export async function deleteImageStorage(imagePath) {
  const { error: storageError } = await supabase.storage
    .from("sneaker")
    .remove([imagePath]);

  if (storageError)
    throw new Error("IMAGE_DELETE_ERROR", { cause: storageError });
}
