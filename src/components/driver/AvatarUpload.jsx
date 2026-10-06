import { useRef } from "react";

export default function AvatarUpload({ avatarUrl, onFileSelect }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover border-2 border-border"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-muted border-2 border-border flex items-center justify-center">
          <span className="text-muted-foreground text-2xl">?</span>
        </div>
      )}
      <button
        type="button"
        onClick={handleClick}
        className="px-4 py-2 text-sm font-medium border border-border rounded hover:bg-muted transition-colors"
      >
        {avatarUrl ? "Change" : "Upload"}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
