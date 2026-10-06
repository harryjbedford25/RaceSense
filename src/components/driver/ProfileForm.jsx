import { useState } from "react";
import { Link } from "react-router-dom";
import AvatarUpload from "@/components/driver/AvatarUpload";
import LinksEditor from "@/components/driver/LinksEditor";
import {
  isUsernameAvailable,
  normaliseUsername,
  saveDriverProfile,
  uploadAvatar,
} from "@/lib/driverData";

const FIELD =
  "w-full border border-border bg-card px-3.5 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/60";

const LABEL = "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground";

const initialForm = (driver) => ({
  name: driver?.name || "",
  username: driver?.username || "",
  avatar_url: driver?.avatar_url || "",
  racing_number: driver?.racing_number || "",
  team: driver?.team || "",
  country: driver?.country || "",
  bio: driver?.bio || "",
  links: Array.isArray(driver?.links)
    ? driver.links.map((link) => ({ label: link?.label || "", url: link?.url || "" }))
    : [],
});

export default function ProfileForm({ driver }) {
  const [form, setForm] = useState(() => initialForm(driver));
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const set = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const username = normaliseUsername(form.username);

    if (!name) {
      setError("Add your driver name before saving.");
      return;
    }
    if (!username) {
      setError("Pick a username — letters, numbers, dots, dashes.");
      return;
    }

    setSaving(true);
    setError("");
    try {
      if (!(await isUsernameAvailable(username, driver?.id))) {
        setError(`@${username} is already taken. Try another.`);
        return;
      }
      const avatar_url = file ? await uploadAvatar(file) : form.avatar_url;
      const saved = await saveDriverProfile(driver?.id, { ...form, name, avatar_url });
      window.location.href = `/driver/${saved.username}`;
    } catch (e) {
      console.error('Profile save error:', e);
      setError(`Couldn't save your profile: ${e.message || 'Unknown error'}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="mt-8 space-y-6">
      <div>
        <div className={LABEL}>Profile photo</div>
        <div className="mt-3">
          <AvatarUpload url={form.avatar_url} file={file} onFile={setFile} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={LABEL}>Driver name</span>
          <input
            className={`${FIELD} mt-2`}
            value={form.name}
            onChange={set("name")}
            placeholder="Harry Bedford"
          />
        </label>

        <label className="block">
          <span className={LABEL}>Username</span>
          <div className="mt-2 flex items-center border border-border bg-card px-3.5 transition-colors focus-within:border-foreground/60">
            <span className="font-mono text-sm text-muted-foreground">@</span>
            <input
              className="w-full bg-transparent py-3 pl-1 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
              value={form.username}
              onChange={set("username")}
              placeholder="harrybedford"
            />
          </div>
          <span className="mt-2 block font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
            racesense.info/driver/{normaliseUsername(form.username) || "username"}
          </span>
        </label>

        <label className="block">
          <span className={LABEL}>Racing number</span>
          <input
            className={`${FIELD} mt-2`}
            value={form.racing_number}
            onChange={set("racing_number")}
            placeholder="12"
          />
        </label>

        <label className="block">
          <span className={LABEL}>Team</span>
          <input
            className={`${FIELD} mt-2`}
            value={form.team}
            onChange={set("team")}
            placeholder="Apex Karting"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className={LABEL}>Country / region</span>
          <input
            className={`${FIELD} mt-2`}
            value={form.country}
            onChange={set("country")}
            placeholder="United Kingdom"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className={LABEL}>Bio</span>
          <textarea
            className={`${FIELD} mt-2 min-h-[110px] resize-y`}
            value={form.bio}
            onChange={set("bio")}
            placeholder="Club racer chasing tenths at Whilton Mill."
          />
        </label>

        <div className="sm:col-span-2">
          <LinksEditor
            links={form.links}
            onChange={(links) => setForm((current) => ({ ...current, links }))}
          />
        </div>
      </div>

      {error ? (
        <p className="border border-destructive/60 px-4 py-3 font-mono text-[11px] tracking-[0.08em] text-destructive">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={saving} className="rs-btn rs-btn-fill disabled:opacity-60">
          {saving ? "SAVING…" : "SAVE PROFILE"}
        </button>
        <Link to="/" className="rs-btn rs-btn-line">
          CANCEL
        </Link>
      </div>
    </form>
  );
}