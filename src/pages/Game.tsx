import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const Game = () => {
  const [showBack, setShowBack] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Auto-hide after 5s, reappear on mouse move
  useEffect(() => {
    let timer = setTimeout(() => setShowBack(false), 5000);
    const onMove = () => {
      setShowBack(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowBack(false), 5000);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchstart", onMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen">
      <Link
        to="/"
        className={`fixed top-4 left-4 z-50 px-3 py-1.5 rounded-md text-white text-xs font-medium bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 no-underline ${
          showBack ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        ← Back to blog
      </Link>
      <iframe
        src="https://raclettemeister.github.io/claude-vibe_repo/"
        className="w-full h-full border-0 block"
        allow="autoplay"
        allowFullScreen
        title="Chez Julien Simulator"
      />
    </div>
  );
};

export default Game;
