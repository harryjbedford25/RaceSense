import { Image } from "@/components/ui/image";

/** Literal sizes so Tailwind keeps every class. */
const SIZES = {
  sm: "h-10 w-10 text-[11px]",
  md: "h-14 w-14 text-base",
};

const initials = (name) =>
  String(name || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

/** Square driver portrait, falling back to initials when no photo is set. */
export default function DriverAvatar({ driver, size = "sm" }) {
  const box = `relative shrink-0 overflow-hidden border border-border bg-card ${SIZES[size] || SIZES.sm}`;

  if (!driver?.avatar_url) {
    return (
      <span className={`grid place-items-center font-mono font-medium text-muted-foreground ${box}`}>
        {initials(driver?.name)}
      </span>
    );
  }

  return (
    <span className={box}>
      <Image
        src={driver.avatar_url}
        alt={`${driver.name} profile photo`}
        className="absolute inset-0 h-full w-full"
        fittingType="fill"
      />
    </span>
  );
}