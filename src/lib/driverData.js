import { supabase } from '@/lib/supabaseClient';
import { normaliseLinks } from "@/lib/profileLinks";

/**
 * The only module that talks to the backend.
 *
 * Driver profile data is deliberately plain — flat driver fields plus one
 * id-based link from a race result to its driver. Migrating to Supabase
 * means rewriting this file, nothing in the UI.
 */

const DRIVER_FIELDS = [
  "name",
  "username",
  "avatar_url",
  "racing_number",
  "team",
  "country",
  "bio",
];

export function normaliseUsername(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^@+/, "")
    .replace(/[^a-z0-9._-]/g, "");
}

export async function getViewer() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user || null;
  } catch (e) {
    return null; // visitor isn't signed in — public profiles still load
  }
}

export async function getDriverByUsername(username) {
  const handle = normaliseUsername(username);
  if (!handle) return null;
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('username', handle)
    .single();
  if (error) return null;
  return data;
}

export async function getDriverByOwner(ownerId) {
  if (!ownerId) return null;
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('created_by_id', ownerId)
    .single();
  if (error) return null;
  return data;
}

export async function isUsernameAvailable(username, currentDriverId) {
  const handle = normaliseUsername(username);
  if (!handle) return false;
  const { data, error } = await supabase
    .from('drivers')
    .select('id')
    .eq('username', handle);
  if (error) return false;
  return !data.some((driver) => driver.id !== currentDriverId);
}

export async function listDriverResults(driverId) {
  if (!driverId) return [];
  const { data, error } = await supabase
    .from('race_results')
    .select('*')
    .eq('driver_id', driverId)
    .order('date', { ascending: false })
    .limit(200);
  if (error) return [];
  return data || [];
}

export async function uploadAvatar(file) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  console.log('Uploading avatar to:', filePath);

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Avatar upload error:', uploadError);
    throw new Error(`Avatar upload failed: ${uploadError.message}`);
  }

  const { data } = supabase.storage
    .from('avatars')
    .getPublicUrl(filePath);

  console.log('Avatar public URL:', data.publicUrl);
  return data.publicUrl;
}

export async function saveDriverProfile(driverId, input) {
  const payload = {};
  DRIVER_FIELDS.forEach((field) => {
    payload[field] =
      field === "username"
        ? normaliseUsername(input.username)
        : String(input[field] ?? "").trim();
  });
  payload.links = normaliseLinks(input.links);

  if (driverId) {
    const { data, error } = await supabase
      .from('drivers')
      .update(payload)
      .eq('id', driverId)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  // Add created_by_id for new drivers
  const user = await getViewer();
  if (user) {
    payload.created_by_id = user.id;
  }

  const { data, error } = await supabase
    .from('drivers')
    .insert(payload)
    .select()
    .single();
  if (error) throw error;
  return data;
}

/** Every driver with a profile — powers the directory and the standings. */
export async function listDrivers() {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(200);
  if (error) return [];
  return data || [];
}

/** Every logged race result, across all drivers — aggregated in driverStats. */
export async function listAllResults() {
  const { data, error } = await supabase
    .from('race_results')
    .select('*')
    .order('date', { ascending: false })
    .limit(500);
  if (error) return [];
  return data || [];
}