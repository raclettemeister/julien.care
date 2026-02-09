import { useState } from "react";
import julienPhoto from "@/assets/julien-photo.jpg";

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
          className="w-[200%] h-[200%] object-cover -translate-x-[22%] -translate-y-[30%]"
        />
      </div>

      {/* Postal card overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#f5f0e8] border-2 border-[#c9b99a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: "rotate(-1.5deg)",
              boxShadow: "4px 6px 20px rgba(0,0,0,0.3)",
            }}
          >
            {/* Postal card border pattern */}
            <div className="absolute inset-0 border-[6px] border-dashed border-[#c9b99a]/40 pointer-events-none m-2" />

            {/* Photo */}
            <div className="relative">
              <img
                src={julienPhoto}
                alt="Julien Thibaut with Taylor GS Mini"
                className="w-full"
              />

              {/* SVG annotations overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 400"
                preserveAspectRatio="none"
              >
                {/* Arrow line to face */}
                <path
                  d="M 480 60 C 420 80, 340 100, 280 140"
                  stroke="#2a2a2a"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    filter: "url(#pencil)",
                  }}
                />
                {/* Arrowhead */}
                <polygon
                  points="280,140 290,128 274,132"
                  fill="#2a2a2a"
                />
                {/* Pencil texture filter */}
                <defs>
                  <filter id="pencil">
                    <feTurbulence
                      type="turbulence"
                      baseFrequency="0.05"
                      numOctaves="2"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="1.5"
                    />
                  </filter>
                </defs>
              </svg>

              {/* "This is my face opening presents" annotation */}
              <div
                className="absolute top-6 right-4 max-w-[160px] text-right"
                style={{
                  fontFamily: "'Caveat', 'Segoe Script', cursive",
                  fontSize: "15px",
                  color: "#2a2a2a",
                  lineHeight: 1.3,
                  transform: "rotate(-3deg)",
                }}
              >
                This is my face opening presents.
              </div>
            </div>

            {/* Bottom postal card strip */}
            <div className="px-5 py-4 flex items-center justify-between">
              {/* FRAGILE highlight */}
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{
                  fontFamily: "'Caveat', 'Segoe Script', cursive",
                  color: "#2a2a2a",
                  background: "linear-gradient(180deg, transparent 55%, #f7d26b 55%)",
                  padding: "2px 6px",
                }}
              >
                FRAGILE
              </span>

              {/* WE CARE highlight */}
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{
                  fontFamily: "'Caveat', 'Segoe Script', cursive",
                  color: "#2a2a2a",
                  background: "linear-gradient(180deg, transparent 55%, #f7d26b 55%)",
                  padding: "2px 6px",
                }}
              >
                WE CARE
              </span>

              {/* Stamp-like corner */}
              <div
                className="w-14 h-16 border-2 border-dashed border-[#c9b99a] flex items-center justify-center"
                style={{ transform: "rotate(3deg)" }}
              >
                <span className="text-[10px] text-[#c9b99a] text-center leading-tight font-mono">
                  HANDLE
                  <br />
                  WITH
                  <br />
                  CARE
                </span>
              </div>
            </div>

            {/* Close button */}
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
