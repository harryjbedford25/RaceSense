import { useState } from "react";
import { Check, Share2 } from "lucide-react";

/** Copies the public profile link, or opens the native share sheet on mobile. */
export default function ShareButton({ username }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}/driver/${username}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `@${username} on RaceSense`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      /* share sheet dismissed — nothing to report */
    }
  };

  return (
    <button type="button" onClick={share} className="rs-btn rs-btn-line !px-4 !py-2.5">
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-primary" /> LINK COPIED
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5" /> SHARE PROFILE
        </>
      )}
    </button>
  );
}