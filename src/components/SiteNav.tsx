import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", labelEn: "Essays", labelFr: "Essais" },
  { path: "/now", labelEn: "Now", labelFr: "Maintenant" },
  { path: "/projects", labelEn: "Projects", labelFr: "Projets" },
  { path: "/analog", labelEn: "Analog", labelFr: "Analog" },
  { path: "/about", labelEn: "About", labelFr: "À propos" },
];

const SiteNav = () => {
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-hand text-2xl font-bold text-foreground no-underline hover:text-accent transition-colors"
        >
          Julien
        </Link>
        <div className="flex items-center gap-1 flex-wrap justify-end">
          {navItems.map(({ path, labelEn, labelFr }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-body text-sm px-3 py-1.5 no-underline transition-all ${
                  isActive
                    ? "font-semibold text-foreground squiggle-underline"
                    : "font-normal text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang === "fr" ? labelFr : labelEn}
              </Link>
            );
          })}
          <button
            onClick={toggleLang}
            className="ml-2 font-hand text-sm font-bold border-[1.5px] border-accent text-accent px-3 py-1 rounded-full bg-transparent cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
