import { supabase } from "../lib/supabaseClient";

export async function addSneaker(sneaker) {
  const { data: newSneaker, error } = await supabase
    .from("sneaker")
    .insert(sneaker)
    .select()
    .maybeSingle();

  if (error) throw new Error("ADD_SNEAKER_ERROR", { cause: error });

  return newSneaker;
}

export async function updateSneakerImage(sneakerId, url) {
  const { error: updateError } = await supabase
    .from("sneaker")
    .update({ image_url: url })
    .eq("id", sneakerId);

  if (updateError) {
    throw new Error("UPDATE_SNEAKER_URL_ERROR", { cause: updateError });
  }
}

export async function fetchSneakers(page = 0, filter = {}, size = 10) {
  const from = page * size;
  const to = from + size - 1;

  let query = supabase
    .from("sneaker")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (filter.brand) {
    query = query.eq("brand", filter.brand);
  }

  if (filter.nameModel?.trim()) {
    query = query.ilike("nameModel", `%${filter.nameModel}%`);
  }

  const { data: sneakers, count, error } = await query;

  if (error) throw new Error("GET_SNEAKERS_ERROR", { cause: error });

  return { sneakers, count };
}

export async function deleteSneaker(id) {
  const { error } = await supabase.from("sneaker").delete().eq("id", id);
  if (error) throw new Error("DELETE_SNEAKER_ERROR", { cause: error });
}

export async function updateSneakerService(sneaker, id) {
  const { data: updatedSneaker, error } = await supabase
    .from("sneaker")
    .update(sneaker)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("UPDATE_SNEAKER_ERROR", { cause: error });

  return updatedSneaker;
}

export async function fetchSneakerById(id) {
  const { data: sneaker, error } = await supabase
    .from("sneaker")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error("GET_SNEAKER_BY_ID_ERROR", { cause: error });
  return sneaker;
}
