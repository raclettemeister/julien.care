import { useState } from "react";
import julienPhoto from "@/assets/julien-photo.jpg";
import julienFullPhoto from "@/assets/julien-full-photo.png";

const PostalCardModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Circular avatar — click to open */}
      <div
        className="w-24 h-24 rounded-full bg-muted border border-border shrink-0 overflow-hidden cursor-pointer hover:ring-2 hover:ring-accent transition-all"
        onClick={() => setOpen(true)}
      >
        <img
          src={julienPhoto}
          alt="Julien Thibaut"
          className="w-full h-full object-cover scale-[1.3]"
        />
      </div>

      {/* Postal card overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={julienFullPhoto}
              alt="Julien Thibaut"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-sm hover:bg-black/70 transition-colors z-10"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostalCardModal;
